'use strict';
const uuidv1 = require('uuid/v1');
const fs = require('fs');
const AWS = require('aws-sdk');
const cfgFile = require("../../cfg/mr_config.json");
const logger = cfgFile.logPath;
const aeclient = require('aws-elasticsearch-client');

// amazon - kinesis:
// var credentials = new AWS.SharedIniFileCredentials({profile: 'covid19'});
// AWS.config.credentials = credentials;
var stream = 'COVID19SensorDelivery';
var kinesis = new AWS.Kinesis({ region: 'eu-west-1' });
const firehose = new (require('aws-sdk/clients/firehose'))({ region: 'eu-west-1' })

// let redis = require('redis'),
// clientRedis = redis.createClient({
//     port: 6379,               // replace with your port
//     host: 'cv19redis-001.d9jy7a.0001.euw1.cache.amazonaws.com'
// });

const options_PRD = {
    host: cfgFile.ELK_PRD['Path'],
    region: cfgFile.ELK_PRD['Region'],
    //credentials: awscredentials
};

// create production es client
const client_prd = aeclient(options_PRD);
let isEsAlive = isESClientAlive(client_prd);
createESIndex(cfgFile.ELK_PRD.mrIdx);
createESIndex(cfgFile.ELK_PRD.patientsIdx);
createESIndex(cfgFile.ELK_PRD.sensorsIdx);

let sensor_patient_dict = []; // create an empty array

//const mr_docs = require("../../mr_docs.json");
// var mr_docs = mr_v4_file.hits.map(function(item) {
//     return item._source;
// });

// console.log(mr_docs);
// var str1 = JSON.stringify(mr_docs);
// //console.log(str1);
// fs.writeFileSync('./mr_docs.json', str1);
// fs.writeFile(

//     './mr_docs.json',

//     JSON.stringify(str1),

//     function (err) {
//         if (err) {
//             console.error('Crap happens');
//         }
//     }
// );

// for (let doc of mr_docs.docs) {
//     client_prd.index({
//         index: cfgFile.ELK_PRD['mrIdx'],
//         body: doc
//     }, function (err, resp, status) {
//         if (err){ 
//             log(err);
//             console.log(err);
//         }
//         else {
//             let str = "add data to es for:" + doc.unitId + ":" + doc.vendor;
//             console.log(str);
//             log(status);
//             log(str);
//         }
//     });

// }

// let rrr = 5;

// exports.getLastKnown= async function (req,res){
//     clientRedis.hgetall("LastKnown", function (err, obj) {
//         if(err){
//             console.log(err);
//         }else{
//             //res.send(obj[Object.keys(obj)[0]]);
//             res.header("Access-Control-Allow-Origin", "*");
//             res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//             res.send(obj)
//             res.end();
//         }    
//      });
// }

// exports.getLastUpdate= async function (req,res){
//     clientRedis.hgetall("last_update", function (err, obj) {
//         if(err){
//             console.log(err);
//         }else{
//             // res.send(obj[Object.keys(obj)[0]]);
//             res.header("Access-Control-Allow-Origin", "*");
//             res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//             res.send(obj)
//             res.end();
//         }    
//      });
// }

exports.printManual = function (req, res) {
    console.log('printing manual...');
    fs.readFile('./api/view/index.html', function (err, html) {
        if (err) {
            console.log(err);
            throw err;
        }

        res.writeHeader(200, { "Content-Type": "text/html" });
        res.write(html);
        res.end();
    });
}

exports.JsonMRExample = function (req, res) {
    fs.readFile('./api/view/measure_result.json', function (err, json) {
        if (err) {
            throw err;
        }

        res.writeHeader(200, { "Content-Type": "application/json" });
        res.write(json);
        res.end();
    });
}

exports.JsonMRSchema = function (req, res) {
    fs.readFile('./api/view/mr_schema.json', function (err, json) {
        if (err) {
            throw err;
        }

        res.writeHeader(200, { "Content-Type": "application/json" });
        res.write(json);
        res.end();
    });
}

exports.JsonNewPatientExample = function (req, res) {
    fs.readFile('./api/view/mr_new_patient.json', function (err, json) {
        if (err) {
            throw err;
        }

        res.writeHeader(200, { "Content-Type": "application/json" });
        res.write(json);
        res.end();
    });
}

exports.JsonNew_patient_schema = function (req, res) {
    fs.readFile('./api/view/mr_new_patient_schema.json', function (err, json) {
        if (err) {
            throw err;
        }

        res.writeHeader(200, { "Content-Type": "application/json" });
        res.write(json);
        res.end();
    });
}

exports.Json_sensor_unit_schema = function (req, res) {
    fs.readFile('./api/view/mr_unit_record_schema.json', function (err, json) {
        if (err) {
            throw err;
        }

        res.writeHeader(200, { "Content-Type": "application/json" });
        res.write(json);
        res.end();
    });
}

exports.get_id = function (req, res) {
    console.log('new_id');

    var pid = uuidv1();
    res.send({ new_id: pid });
    res.end();
}


exports.archive_mr = function (req, res) {

    console.log('post: /mr');
    var jres = req.body;

    let nid = uuidv1();
    let strB = `(post mr docId ${nid} data of: ${jres.unitId} : ${jres.vendor})`;
    log(strB);

    // ES:
    send_mr_to_es(nid, jres);

    // KINESIS
    if (cfgFile.usekinesis) {
        send_mr_to_kinesis(jres);
    }

    res.send({ status: 'SUCCESS' });
    res.end();
};

function send_mr_to_es(nid, data) {
    client_prd.index({
        index: cfgFile.ELK_PRD['mrIdx'],
        id: nid,
        type: 'measureresult',
        body: data
    }, function (err, resp, status) {
        if (err) log(err);
        else {
            let str = "add data to es for sensor:" + data.unitId + ":" + data.vendor;
            log(status);
            log(str);
        }
    });
}

function send_mr_to_kinesis(data) {
    var recordParams = {
        Record: {
            Data: JSON.stringify(data)
        },
        DeliveryStreamName: stream
    }

    firehose.putRecord(recordParams, function (err, res) {
        if (err) {
            console.log(err)
        }
        else {
            console.log(res)
        }
    });
}

exports.new_sensor = function (req, res) {
    //let nid = exports.get_id();
    var jres = req.body;
    let nid = jres.unit_id;

    console.log(jres);
    client_prd.index({
        index: cfgFile.ELK_PRD.sensorsIdx,
        id: nid,
        type: 'sensor',
        body: jres
    }, function (err, resp, status) {
        if (err) log(err);
        else {
            let str = "add new sensor:" + nid;
            log(status);
            log(str);
        }
    });
    res.send({ status: 'SUCCESS', sensorId: nid });
    res.end();
};

exports.new_patient = function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.send({ status: 'SUCCESS' });
    res.end();
    var jres = req.body;
    jres.patient_Id = uuidv1();
    console.log(jres);
    let nid = jres.patient_Id
    client_prd.index({
        index: cfgFile.ELK_PRD.patientsIdx,
        id: nid,
        type: 'patient',
        body: jres
    }, function (err, resp, status) {
        if (err) log(err);
        else {
            let str = "add new patient:" + nid;
            log(status);
            log(str);
        }
    });
    // //update dictionary sensorId-PatientId is redis
    // let sensors = jres.sensors_list;
    // for (let sensor of sensors) {
    //     updateRedis4NewPatient(Object.values(sensor)[0].unit_Id,jres.patient_Id);
    // }
};

exports.attachSensor = function (req, res) {
    // let sensorId=req.body;
    // client_prd.exists()

    // clientRedis.hgetall("LastKnown", function (err, obj) {
    //     if(err){
    //         console.log(err);
    //     }else{
    //         res.send(obj[Object.keys(obj)[0]]);
    //         res.end();
    //     }    
    //  });
}

exports.get_patient_id = function (req, res) {
    let id = req.params.id;
    //let id2 = req.query.id;
    let idx = cfgFile.ELK_PRD.patientsIdx;
    let query = {
        "query": {
            "match_all": {}
        }
    };
    let patients = esQuery(idx, 'patient', query, buildTblCB);
}

function buildTblCB(patients) {
    for (let patient of patients) {
        for (let sensor of patient._source.sensors_list) {
            //updateRedis4NewPatient(sensor.unit_Id,patient._source.patient_Id);
        }
    }
}

// function updateRedis4NewPatient(sensor_id,patient_Id) {
//     clientRedis.select(3, function (err, res) {
//         // you'll want to check that the select was successful here
//         // if(err) return err;
//         clientRedis.set(sensor_id, patient_Id, ()=>{
//             clientRedis.get(sensor_id, function (err, value) {
//                 if (err) {
//                     throw err;
//                 } else {
//                     log(`pushed to redis: sensorId: ${sensor_id} patientId: ${value}`);
//                     console.log(`pushed to redis: sensorId: ${sensor_id} patientId: ${value}`);
//                 }
//             });
//         }); // this will be posted to database 3 rather than db 0
//     });
// }

async function esQuery(idx, req_type, query, cb) {
    client_prd.search({
        index: idx,
        type: req_type,
        size: 1000,
        body: {
            query: {
                "match_all": {}
            }
        }
    },
        function (err, resp, status) {
            if (resp) {
                // do something
                console.log(resp.hits.hits);
                cb(resp.hits.hits);
            }
            else {
                console.log(err);
            }
        }
    );
}

async function isESClientAlive(client) {
    let isAlive = await client.ping({
        requestTimeout: 30000,
    }, function (error) {
        if (error) {
            console.error('elasticsearch cluster is down!');
            log('elasticsearch cluster is down!');
            return false;
        } else {
            console.log('Everything is ok');
            log('Everything is ok');
            return true;
        }
    });
}

function createESIndex(mrIdx) {
    if (!doesIdxExist(mrIdx)) {
        if (true) {
            client_prd.indices.create({
                index: mrIdx
            }, function (err, resp, status) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("create", resp);
                    log(`index: ${mrIdx} was created succesfully`);
                }
            });
        } else {
            console.log(`Creating index failed: index ${mrIdx} is already exists`);
            log(`Creating index failed: index ${mrIdx} is already exists`);
            //console.warn(`Creating index failed: index ${mrIdx} is already exists`);
        }
    }
}

async function doesIdxExist(idx) {
    return await client_prd.indices.exists({
        index: idx,
    });
}

function log(msg) {
    let timeAndDate = getTimeAndDate();
    fs.appendFile(logger, `\n${timeAndDate} :: ${msg}`, err => {
        if (err) console.error(err);
    });
}

const moment = require('moment');
function getTimeAndDate() {
    // let timeStamp = Date.now();
    // let fullDate = new Date(timeStamp);
    // let date = fullDate.getDate();
    // let month = fullDate.getMonth();
    // let year = fullDate.getFullYear();
    // let res = `${date}-${month}-${year}`;

    // let offset = new Date().getTimezoneOffset();
    //let time= offset>0? "+":"-"+parseInt(offset/60)+":"+offset%60;

    // return `${date}-${month}-${year} >>`;

    return `${moment().format('MMMM Do YYYY, h:mm:ss a')}`
}
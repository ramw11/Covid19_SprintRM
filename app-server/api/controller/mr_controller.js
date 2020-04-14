'use strict';
const uuidv1 = require('uuid/v1');
const fs = require('fs');
const AWS = require('aws-sdk');
const elkCfgFile = require("../../cfg/mr_config.json");
const logger = elkCfgFile.logPath;
const aeclient = require('aws-elasticsearch-client');

// amazon - kinesis:
// var credentials = new AWS.SharedIniFileCredentials({profile: 'covid19'});
// AWS.config.credentials = credentials;
var stream='COVID19SensorDelivery';
var kinesis = new AWS.Kinesis({region : 'eu-west-1'});
const firehose = new (require('aws-sdk/clients/firehose'))({ region: 'eu-west-1' })

// const options_TEST = {
//     host: { host: elkCfgFile.ELK_TEST['Path'], auth : auth },
//     region: elkCfgFile.ELK_TEST['Region'],
//     //credentials: awscredentials
// };

const options_PRD = {
    host: elkCfgFile.ELK_PRD['Path'],
    region: elkCfgFile.ELK_PRD['Region'],
    //credentials: awscredentials
};

// create production es client
const client_prd = aeclient(options_PRD);
let isEsAlive = isESClientAlive(client_prd);
createESIndex(elkCfgFile.ELK_PRD.indexname);
createESIndex(elkCfgFile.ELK_PRD.patientsIdx);
createESIndex(elkCfgFile.ELK_PRD.sensorsIdx);


//create test es client
//const client_tst = aeclient(options_TEST);
//let isEsAlive = isESClientAlive(client_tst);
//createESIndex(elkCfgFile.ELK_TEST['indexname']);


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
    let strB = `(Before add docId ${nid} data to es for: ${jres.patientId} : ${jres.vendor})`;
    log(strB);
    // ES:
    // client_prd.index({
    //     index: elkCfgFile.ELK_PRD['indexname'],
    //     id: nid,
    //     type: 'measureresult',
    //     body: jres
    // }, function (err, resp, status) {
    //     if (err) log(err);
    //     else {
    //         let str = "add data to es for:" + jres.patientId + ":" + jres.vendor;
    //         log(status);
    //         log(str);
    //     }
    // });

    // kinesis:
    var sensor = jres.vendor + Math.floor(Math.random() * 100000);
    // var reading = Math.floor(Math.random() * 1000000);

    // let recordParams = {
    // Data: JSON.stringify(jres),
    // PartitionKey : sensor,
    // StreamName : stream
    // };
    var recordParams = {
        Record: {
            Data: JSON.stringify(jres)
        },
        DeliveryStreamName: stream
    }

    firehose.putRecord(recordParams,function (err, res) {
        if (err) {
            console.log(err)
        }
        else {
            console.log(res)
        }
      });

    // kinesis.putRecord(recordParams, function(err, data) {
    // if (err) {
    //     console.log(err);
    // }
    // else {
    //     console.log('Successfully sent data to Kinesis.');
    // }
    // });

    res.send({ status: 'SUCCESS' });
    res.end();
};

exports.new_sensor = function (req, res) {
    //let nid = exports.get_id();
    var jres = req.body;
    let nid=jres.unit_id;
    res.send({ status: 'SUCCESS', sensorId: nid });
    res.end();

    console.log(jres);
    client_prd.index({
        index: elkCfgFile.ELK_PRD.sensorsIdx,
        //id: nid,
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
};

exports.new_patient = function (req, res) {
    var jres = req.body;
    res.send({ status: 'SUCCESS' });
    res.end();
    jres.patient_Id=uuidv1();
    console.log(jres);
    let nid = jres.patient_Id
    client_prd.index({
        index: elkCfgFile.ELK_PRD.patientsIdx,
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
};

exports.archive_mr_tst = function (req, res) {
    var jres = req.body;
    res.send({ status: 'SUCCESS' });
    res.end();

    // console.log(jres);  
    client_tst.index({
        index: elkCfgFile.ELK_TEST['indexname'],
        id: jres.patientId,
        type: 'measureresult',
        body: jres
    }, function (err, resp, status) {
        console.log(resp);
    }
    );
};

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

function createESIndex(indexname) {
    if (!doesIdxExist(indexname)) {
        if (true) {
            client_prd.indices.create({
                index: indexname
            }, function (err, resp, status) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("create", resp);
                    log(`index: ${indexname} was created succesfully`);
                }
            });
        } else {
            console.log(`Creating index failed: index ${indexname} is already exists`);
            log(`Creating index failed: index ${indexname} is already exists`);
            //console.warn(`Creating index failed: index ${indexname} is already exists`);
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

function getTimeAndDate() {
    let timeStamp = Date.now();
    let fullDate = new Date(timeStamp);
    let date = fullDate.getDate();
    let month = fullDate.getMonth();
    let year = fullDate.getFullYear();
    let res = `${date}-${month}-${year}`;

    let offset = new Date().getTimezoneOffset();
    //let time= offset>0? "+":"-"+parseInt(offset/60)+":"+offset%60;

    return `${date}-${month}-${year} >>`;
}

//getAllSensors({institute_name:'Wolfson'});
// function getAllSensors(body){
//     // client_prd.search({
//     //     index: elkCfgFile.ELK_PRD.sensorsIdx,
//     //     body:{
//     //         match:{
//     //             key: val
//     //         }
//     //     }
//     // }, (err, response, status)=>{
//     //     if(err) console.log(`Error: ${err}`);
//     //     else {
//     //         console.log(response);
//     //     }
//     // });

//     const { body } = await client_prd.search({
//         index: elkCfgFile.ELK_PRD.sensorsIdx,
//         body: {
//           query: {
//             match: {
//                 institute_name: "Wolfson"
//             }
//           }
//         }
//       })
    
//       console.log(body.hits.hits)
// }

// function createLogger(msg){
//     logger=__dirname+'/../logs/_logger.txt';
//     fs.exists(logger, isExists=>{
//         if(isExists==false){
//             fs.writeFileSync(logger, "new logger created\n");
//         }
//     })

//     log(msg);
//     // ,null, ()=>{
//     //     logger.log(msg);
//     // });
// }
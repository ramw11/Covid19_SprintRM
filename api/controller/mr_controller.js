'use strict';
const uuidv1 = require('uuid/v1');
const fs = require('fs');
const AWS=require('aws-sdk');
const aeclient = require('aws-elasticsearch-client');
const elkCfgFile = require("../../cfg/mr_config.json");
const logger=elkCfgFile.logPath;

// const awscredentials = new AWS.ECSCredentials({
//     httpOptions: {timeout: 5000},
//     maxRetries: 10,
//   });

//let auth = "elastic:VfuNDVwQqcnJmdLVsNFNoZgI";
// let port = 9243;
// let protocol = "https";
// let hosturl =  [ '1ef7bcb100ab4a95b850383f561c435f.us-east-1.aws.found.io'];

// let hosts = hosturl.map(function(host){
//     return{
//         protocol: protocol,
//         host : host,
//         port : port,
//         auth : auth    
//     };
// });

// var elasticsearch = require('elasticsearch');
// var client_tst = new elasticsearch.Client({
//    hosts: hosts
// });

// const options_TEST = {
//     host: { host: elkCfgFile.ELK_TEST['Path'], auth : auth },
//     region: elkCfgFile.ELK_TEST['Region'],
//     //credentials: awscredentials
// };

// const options_PRD = {
//     host: elkCfgFile.ELK_PRD['Path'],
//     region: elkCfgFile.ELK_PRD['Region']
//     //credentials: awscredentials
// };

const options_PRD = {
    host: "https://search-covid19-es-xpwsq3s2uyodkz7tqizo5oxcty.eu-west-1.es.amazonaws.com",
    region: "eu-west-1"
    //credentials: awscredentials
};

// create production es client
const client_prd = aeclient(options_PRD);
//let isEsAlive = isESClientAlive(client_prd);
client_prd.ping({
    requestTimeout: 30000,
}, function(error) {
    if (error) {
        console.error('elasticsearch cluster is down!');
        log('elasticsearch cluster is down!');
        //return false;
    } else {
        console.log('Everything is ok');
        log('Everything is ok');
        //return true;
    }
});

if(!doesIdxExist(indexname)){
    client_prd.indices.create({ 
        index: elkCfgFile.ELK_PRD['indexname']
    }, function(err, resp, status) {
        if (err) {
            console.log(err);
        } else {
            console.log("create", resp);
        }
    });
} else {
    log(`Creating index failed: index ${indexname} is already exists`);
    console.warn(`Creating index failed: index ${indexname} is already exists`);
}

//createESIndex(elkCfgFile.ELK_PRD['indexname']);

//create test es client
//const client_tst = aeclient(options_TEST);
//let isEsAlive = isESClientAlive(client_tst);
//createESIndex(elkCfgFile.ELK_TEST['indexname']);


exports.printManual= function(req, res){
    fs.readFile('./api/view/index.html', function (err, html) {
        if (err) {
            throw err; 
        }

        res.writeHeader(200, {"Content-Type": "text/html"});  
        res.write(html);  
        res.end();
    });
}

exports.runGUI= function(req,res){
    fs.readFile('./api/view/index.html', function (err, html) {
        if (err) {
            throw err; 
        }

        res.writeHeader(200, {"Content-Type": "text/html"});  
        res.write(html);  
        res.end();
    });
}

exports.JsonPatientExample = function(req, res){
    fs.readFile('./api/view/measure_result.json', function (err, json) {
        if (err) {
            throw err; 
        }

        res.writeHeader(200, {"Content-Type": "application/json"});  
        res.write(json);  
        res.end();
    });
}

exports.JsonMRSchema=function(req, res){
    fs.readFile('./api/view/mr_schema.json', function (err, json) {
        if (err) {
            throw err; 
        }

        res.writeHeader(200, {"Content-Type": "application/json"});  
        res.write(json);  
        res.end();
    });
}

exports.get_id = function(req, res) {
    
    var pid = uuidv1();
    res.send({ new_id: pid });
    res.end();
}

exports.archive_mr =function(req, res) {
    var jres = req.body;
    res.send({ status: 'SUCCESS' });
    res.end();

   console.log(jres);  
   client_prd.index({
            index: elkCfgFile.ELK_PRD['indexname'],
            id: exports.get_id(),
            type: 'measureresult',
            body: jres
        }, function(err, resp, status) {
            if(err) log(err);
            else{
                let str = "add data to es for:" + jres.patientId + ":" + jres.vendor;
                log(status);
                log(str);
            }
        });    
};

exports.new_sensor =function(req, res) {
    let nid = exports.get_id();
    var jres = req.body;
    res.send({ status: 'SUCCESS',sensorId: nid });
    res.end();

   console.log(jres);  
   client_prd.index({
            index: elkCfgFile.ELK_PRD['indexname'],
            id: nid,
            type: 'patient',
            body: jres
        }, function(err, resp, status) {
            if(err) log(err);
            else{
                let str = "add new patient:" + nid;
                log(status);
                log(str);
            }
        });    
};

exports.new_patient =function(req, res) {
    var jres = req.body;
    res.send({ status: 'SUCCESS' });
    res.end();

   console.log(jres);  
   let nid = exports.get_id();
   client_prd.index({
            index: elkCfgFile.ELK_PRD['indexname'],
            id: nid,
            type: 'patient',
            body: jres
        }, function(err, resp, status) {
            if(err) log(err);
            else{
                let str = "add new patient:" + nid;
                log(status);
                log(str);
            }
        });    
};

exports.archive_mr_tst = function(req, res) {
    var jres = req.body;
    res.send({ status: 'SUCCESS' });
    res.end();

   // console.log(jres);  
   client_tst.index({
            index: elkCfgFile.ELK_TEST['indexname'],
            id: jres.patientId,
            type: 'measureresult',
            body: jres
        }, function(err, resp, status) {
            console.log(resp);
            }
        );    
};

function isESClientAlive(client){
    client.ping({
        requestTimeout: 30000,
    }, function(error) {
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

function createESIndex(indexname){
    if(!doesIdxExist(indexname)){
        client_prd.indices.create({ 
            index: indexname
        }, function(err, resp, status) {
            if (err) {
                console.log(err);
            } else {
                console.log("create", resp);
            }
        });
    } else {
        log(`Creating index failed: index ${indexname} is already exists`);
        console.warn(`Creating index failed: index ${indexname} is already exists`);
    }
}

async function doesIdxExist(idx) {
    return await client_prd.indices.exists({
        index: idx,
      });
}

function log(msg){
    let timeAndDate=getTimeAndDate();
    fs.appendFile(logger, `\n${timeAndDate} :: ${msg}`, err=>{
        if(err) console.error(err);
    });
}

function getTimeAndDate(){
    let timeStamp= Date.now();
    let fullDate=new Date(timeStamp);
    let date=fullDate.getDate();
    let month= fullDate.getMonth();
    let year= fullDate.getFullYear();
    let res=`${date}-${month}-${year}`;

    let offset= new Date().getTimezoneOffset();
    //let time= offset>0? "+":"-"+parseInt(offset/60)+":"+offset%60;

    return `${date}-${month}-${year} >>`;
}

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
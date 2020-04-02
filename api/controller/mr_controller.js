'use strict';
const uuidv1 = require('uuid/v1');
const fs = require('fs');
const AWS=require('aws-sdk');
const aeclient = require('aws-elasticsearch-client');

// const awscredentials = new AWS.ECSCredentials({
//     httpOptions: {timeout: 5000},
//     maxRetries: 10,
//   });

const options = {
    host: 'https://search-covid19-es-xpwsq3s2uyodkz7tqizo5oxcty.eu-west-1.es.amazonaws.com',
    region: 'eu-west-1',
    //credentials: awscredentials
};

const client = aeclient(options);

var indexname = 'measure_results_v2';

client.ping({
    requestTimeout: 30000,
}, function(error) {
    if (error) {
        console.error('elasticsearch cluster is down!');
    } else {
        console.log('Everything is ok');
    }
});

createESIndex(indexname);
function createESIndex(idx){
    if(!doesIdxExist(indexname)){
        client.indices.create({ 
            index: indexname
        }, function(err, resp, status) {
            if (err) {
                console.log(err);
            } else {
                console.log("create", resp);
            }
        });
    } else {
        console.warn(`Creating index failed: index ${idx} is already exists`);
    }
}

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

exports.archive_mr = function(req, res) {
    var jres = req.body;
    res.send({ status: 'SUCCESS' });
    res.end();

   // console.log(jres);  
    client.index({
            index: indexname,
            id: jres.patientId,
            type: 'measureresult',
            body: jres
        }, function(err, resp, status) {
            console.log(resp);
            }
        );    
};

async function doesIdxExist(idx) {
    return await client.indices.exists({
        index: idx,
      });
}
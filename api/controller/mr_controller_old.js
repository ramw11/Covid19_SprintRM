'use strict';
const uuidv1 = require('uuid/v1');

var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
   hosts: [ 'https://search-covid19-es-xpwsq3s2uyodkz7tqizo5oxcty.eu-west-1.es.amazonaws.com']
});

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

client.indices.create({
    index: indexname
}, function(err, resp, status) {
    if (err) {
        console.log(err);
    } else {
        console.log("create", resp);
    }
});

exports.get_patient_id = function(req, res) {
    
    var pid = uuidv1();
    res.send({ patientId: pid });
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
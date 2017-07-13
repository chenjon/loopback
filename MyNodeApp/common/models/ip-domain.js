'use strict';
var loopbackConnectorNeo4jGraph = require("loopback-connector-neo4j-graph");

module.exports = function(Ipdomain) {
    Ipdomain.validatesLengthOf('ip', {min: 7, message: {min: 'IP Address is too short!'}});
    var reg = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    Ipdomain.validatesFormatOf('ip', {with: reg, message: {min: 'Not a valid IP address!'}});

    // var app = require('../../server/server');
    // app.datasources.neo4j.connector.execute(
    //     'MATCH (ipdomain {ip: "251.206.132.205"}) RETURN ipdomain',
    //     function (err, results) {
    //         if (err) {
    //             throw err;
    //         } else {
    //             // do something with results
    //         }
    //     }
    // );
};


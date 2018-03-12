'use strict';

const got = require('got');
const TOKEN = process.env.TOKEN;
const PROJECT = process.env.PROJECT;

const endpoint = `https://www.pivotaltracker.com/services/v5/projects/${PROJECT}/stories?date_format=millis&filter=current_state`;
const headers = { "X-TrackerToken": TOKEN };
const state = 'started';

module.exports.get = (event, context, callback) => {
  const state = event.queryStringParameters.state;
  const url = `${endpoint}:${state}`;

  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
      "Access-Control-Allow-Credentials" : true // Required for cookies, authorization headers with HTTPS
    },
  };

  got(url, { json: true, headers }).then(res => {
    response.body = JSON.stringify(res.body);
    callback(null, response);
  }).catch(error => {
    callback('error');
  });
};

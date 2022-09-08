/*app.get('/keywordstool', function(req, res) {
    var method = "GET";
    var api_url = "/keywordstool";
    var timestamp = Date.now() + '';
    var accessKey = "YOUR_ACCESSKEY";
    var secretKey = "YOUR_SECRETKEY";
  
    var hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, secretKey);
    hmac.update(timestamp + '.' + method + '.' + api_url);
  
  
    var hash = hmac.finalize();
    hash.toString(CryptoJS.enc.Base64);
  
    const request = require('request');
    const options = {
      url: 'https://api.naver.com/keywordstool?hintKeywords=' + encodeURI(req.query.hintKeywords) + '&showDetail=1',
      headers: {'X-Timestamp':timestamp, 'X-API-KEY': accessKey, 
                'X-API-SECRET': "YOUR_SECRETKEY", 'X-CUSTOMER': "YOUR_CUSTOMER_ID", 'X-Signature': hash.toString(CryptoJS.enc.Base64)}
        };
      request.get(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
          res.end(body);
        } else {
          res.status(response.statusCode).end();
          console.log('error = ' + response.statusCode);
          console.log(error)
        }
      });
  })*/
// const hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, secretKey);
// hmac.update(timestamp + '.' + method + '.' + api_url);
// const hash = hmac.finalize();
// hash.toString(CryptoJS.enc.Base64);


import CryptoJS from 'crypto-js';
import crypto from 'crypto';
import request from 'request';
import moment from 'moment';

const method = "GET";


const BASE_URL = 'https://api.naver.com';
const api_url = "/keywordstool";
const accessKey = "01000000000cac9bfd3acf681edebc6d0419aef24e4b12ad82857abd34dc447eda34d83fa7";
const secretKey = "AQAAAAA+GqRsk72wMhabq7m511jvwVE5I0agGeP6HAqgW/oEog==";
const customerid = "2657655";
const timestamp = moment().unix();

const hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, secretKey);
hmac.update(timestamp + '.' + method + '.' + api_url);
const hash = hmac.finalize();

const options = {
  url: `${BASE_URL}${api_url}`,
  headers: {
    'X-Timestamp': timestamp,
    'X-API-KEY': accessKey,
    'X-Customer': customerid,
    'X-Signature':  hash.toString(CryptoJS.enc.Base64),
  }
};
request.get(options, function (error, response, body) {
  console.log(body);
  if (!error && response.statusCode == 200) {
    // res.writeHead(200, { 'Content-Type': 'text/json;charset=utf-8' });
    // res.end(body);
  } else {
    console.log('error = ' + response.statusCode);
    console.log(error)
  }
});

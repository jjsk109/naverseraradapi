import CryptoJS from 'crypto-js';
import request from 'request';
import moment from 'moment';
import fetch from 'node-fetch'

const method = "POST";
const BASE_URL = 'https://api.naver.com';
const api_url = "/stat-reports";
const accessKey = "01000000000cac9bfd3acf681edebc6d0419aef24e4b12ad82857abd34dc447eda34d83fa7";
const secretKey = "AQAAAAA+GqRsk72wMhabq7m511jvwVE5I0agGeP6HAqgW/oEog==";
const customerid = "2657655";
const timestamp = moment().unix();
const hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, secretKey);
hmac.update(timestamp + '.' + method + '.' + api_url);
const hash = hmac.finalize();
const nowDate = moment().format('YYYYMMDD');

const parm = ""
const body_object = {
    "reportTp": "AD",
    "statDt": nowDate,
}
const options = {
  url: `${BASE_URL}${api_url}${parm}`,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-Timestamp': timestamp,
    'X-API-KEY': accessKey,
    'X-Customer': customerid,
    'X-Signature':  hash.toString(CryptoJS.enc.Base64),
  },
  body: JSON.stringify(body_object),
};


/*
request.post(options, function (error, response, body) {
  console.log(body);
  const result = body && JSON.parse(body);
  console.log(result[0]);
  if (!error && response.statusCode == 200) {
    // res.writeHead(200, { 'Content-Type': 'text/json;charset=utf-8' });
    // res.end(body);
  } else {    
    console.log('error = ' + response?.statusCode);
    console.log(error)
  }
});
*/
const res = await fetch(`${BASE_URL}${api_url}${parm}`, {
  method: method,
  headers: {
    'content-type': 'application/json;',
    'X-Timestamp': timestamp,
    'X-API-KEY': accessKey,
    'X-Customer': customerid,
    'X-Signature':  hash.toString(CryptoJS.enc.Base64),
  },
  body: JSON.stringify(body_object),
});
console.log(res);
const result = await res.json();
console.log(result);



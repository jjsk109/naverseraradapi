import CryptoJS from 'crypto-js';
import request from 'request';
import moment from 'moment';
import fetch from 'node-fetch'

// fs im
import fs from 'fs';

const method = "GET";
const BASE_URL = 'https://api.naver.com';
const api_url = "/report-download";
const accessKey = "01000000000cac9bfd3acf681edebc6d0419aef24e4b12ad82857abd34dc447eda34d83fa7";
const secretKey = "AQAAAAA+GqRsk72wMhabq7m511jvwVE5I0agGeP6HAqgW/oEog==";
const customerid = "1095825";
const timestamp = moment().unix();
const hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, secretKey);
hmac.update(timestamp + '.' + method + '.' + api_url);
const hash = hmac.finalize();
const nowDate = moment().format('YYYYMMDD');

const parm = "?authtoken=FztCzyRxtaILvClMTbvg47Wz5NepbeJfhBlrV%2BYGpM%2BLWDn5D24%2F9WnGq7oXSQmYgjY4v1qewz09m7LcT6iC1b4gd0raWEf9"
const body_object = {
    "reportTp": "EXPKEYWORD",
    "statDt": "20220820",
}

const res = await fetch(`${BASE_URL}${api_url}${parm}`, {
  method: method,
  headers: {
    'content-type': 'application/json;',
    'X-Timestamp': timestamp,
    'X-API-KEY': accessKey,
    'X-Customer': customerid,
    'X-Signature':  hash.toString(CryptoJS.enc.Base64),
  },
  // body: JSON.stringify(body_object),
});
console.log(res);
console.log(res.headers.get('content-disposition'));
console.log(res.headers.get('content-disposition').split("\"")[1]);
console.log(res.headers.get('content-length'));
console.log(res.headers.get('content-type'));
// const result = res.json();
// console.log(result);
console.log("------------------------------------------------");
const file = res.headers.get('content-disposition').split("\"")[1];
console.log(file);
const f = fs.open(file);
console.log(f);

import CryptoJS from 'crypto-js';
import request from 'request';
import moment from 'moment';

const method = "GET";
const BASE_URL = 'https://api.naver.com';
let api_url = "/customer-links";
const accessKey = "01000000000cac9bfd3acf681edebc6d0419aef24e4b12ad82857abd34dc447eda34d83fa7";
const secretKey = "AQAAAAA+GqRsk72wMhabq7m511jvwVE5I0agGeP6HAqgW/oEog==";
const customerid = "2657655";
const timestamp = moment().unix();
const hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, secretKey);
hmac.update(timestamp + '.' + method + '.' + api_url);
let hash = hmac.finalize();

/**
 * 고객 정보 조회
 */
 let parm = "?type=MYCLIENTS"
let options = {
  url: `${BASE_URL}${api_url}${parm}`,
  headers: {
    'X-Timestamp': timestamp,
    'X-API-KEY': accessKey,
    'X-Customer': customerid,
    'X-Signature':  hash.toString(CryptoJS.enc.Base64),
  },
};


request.get(options, function (error, response, body) {
  const result = JSON.parse(body);
  console.log(result[0]);
  if (!error && response.statusCode == 200) {
    // res.writeHead(200, { 'Content-Type': 'text/json;charset=utf-8' });
    // res.end(body);
  } else {    
    console.log('error = ' + response?.statusCode);
    console.log(error)
  }
});

parm = ""
api_url = "/stat-reports";
hmac.update(timestamp + '.' + method + '.' + api_url);
hash = hmac.finalize();
let nowDate = moment().format('YYYYMMDD');
let body = {
  'reportTp' : 'EXPKEYWORD',
  'statDt' : `${nowDate}`,
}
options = {
  url: `${BASE_URL}${api_url}${parm}`,
  headers: {
    'X-Timestamp': timestamp,
    'X-API-KEY': accessKey,
    'X-Customer': customerid,
    'X-Signature':  hash.toString(CryptoJS.enc.Base64),
  },
  body: JSON.stringify(body),
};
console.log(options);
request.post(options, function (error, response, body) {
  const result = JSON.parse(body);
  console.log('/stat-reports',result[0]);
  console.log(body);
  if (!error && response.statusCode == 200) {
    // res.writeHead(200, { 'Content-Type': 'text/json;charset=utf-8' });
    // res.end(body);
  } else {    
    console.log('error = ' + response?.statusCode);
    console.log(error)
  }
});

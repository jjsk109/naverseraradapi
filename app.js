import CryptoJS from 'crypto-js';
import request from 'request';
import moment from 'moment';
import fetch from 'node-fetch'

const method = "GET";
const BASE_URL = 'https://api.naver.com';
const api_url = "/stat-reports";
const accessKey = "01000000000cac9bfd3acf681edebc6d0419aef24e4b12ad82857abd34dc447eda34d83fa7";
const secretKey = "AQAAAAA+GqRsk72wMhabq7m511jvwVE5I0agGeP6HAqgW/oEog==";
const customerid = "1095825";
const timestamp = moment().unix();
const hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, secretKey);
hmac.update(timestamp + '.' + method + '.' + api_url);
const hash = hmac.finalize();
const nowDate = moment().format('YYYYMMDD');

const parm = "/report-download?authtoken=esgzhxXGsal5O3WJRINoG3JXxuwZPIDCg6WMmMRwj0MpbehrMEX8zlFLhbgcvU7A0frRpZbwNlfcLoG4IelcKomlJMzEd8IfmTGdnBHV6hk%3D"
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
const result = await res.json();
console.log(result);




/*import CryptoJS from 'crypto-js';
import request from 'request';
import moment from 'moment';
import fetch from 'node-fetch'

const method = "POST";
const BASE_URL = 'https://api.naver.com';
const api_url = "/stat-reports";
const accessKey = "01000000000cac9bfd3acf681edebc6d0419aef24e4b12ad82857abd34dc447eda34d83fa7";
const secretKey = "AQAAAAA+GqRsk72wMhabq7m511jvwVE5I0agGeP6HAqgW/oEog==";
const customerid = "1095825";
const timestamp = moment().unix();
const hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, secretKey);
hmac.update(timestamp + '.' + method + '.' + api_url);
const hash = hmac.finalize();
const nowDate = moment().format('YYYYMMDD');

const parm = ""
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
   body: JSON.stringify(body_object),
});
const result = await res.json();
console.log(result);


-----------------------------------------------------------------
import CryptoJS from 'crypto-js';
import request from 'request';
import moment from 'moment';
import fetch from 'node-fetch'

const method = "GET";
const BASE_URL = 'https://api.naver.com';
const api_url = "/stat-reports";
const accessKey = "01000000000cac9bfd3acf681edebc6d0419aef24e4b12ad82857abd34dc447eda34d83fa7";
const secretKey = "AQAAAAA+GqRsk72wMhabq7m511jvwVE5I0agGeP6HAqgW/oEog==";
const customerid = "1095825";
const timestamp = moment().unix();
const hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, secretKey);
hmac.update(timestamp + '.' + method + '.' + api_url);
const hash = hmac.finalize();
const nowDate = moment().format('YYYYMMDD');

const parm = ""
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
const result = await res.json();
console.log(result);






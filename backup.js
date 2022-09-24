import CryptoJS from 'crypto-js';
import request from 'request';
import moment from 'moment';
import fetch from 'node-fetch'
const a = async () => {

    // 리트포 생성


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
            'X-Signature': hash.toString(CryptoJS.enc.Base64),
        },
        body: JSON.stringify(body_object),
    });
    const result = await res.json();
    console.log(result);
}

const b = async () => {
    // 리트포 불러오기
    //-----------------------------------------------------------------


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
            'X-Signature': hash.toString(CryptoJS.enc.Base64),
        },
        // body: JSON.stringify(body_object),
    });
    const result = await res.json();
    console.log(result);
}

// 결과 값
[
    {
        reportJobId: 1616561559,
        statDt: '2022-08-19T15:00:00Z',
        updateTm: '2022-08-19T15:00:00Z',
        reportTp: 'AD_DETAIL',
        status: 'BUILT',
        downloadUrl: 'https://api.naver.com/report-download?authtoken=FztCzyRxtaIkCH1PUNU189oW%2Bf6TssFe%2B9EAnYt8z%2Fib%2BKPk32RLeAGb7fXPpRsaa9om2nyr7s0UyOMp%2FIM8FqgKWYx49ya3db%2FKOyialUk%3D',
        regTm: '2022-09-21T12:46:38Z',
        loginId: 'jjsk109:naver'
    },
    {
        reportJobId: 1616560995,
        statDt: '2022-09-19T15:00:00Z',
        updateTm: '2022-09-19T15:00:00Z',
        reportTp: 'AD',
        status: 'BUILT',
        downloadUrl: 'https://api.naver.com/report-download?authtoken=FztCzyRxtaIkCH1PUNU183gsKo1XoveEigSb78k%2BLK03pcLlk288h80YCmZDXdT4tVbywXgnVsnpiTy893BR8ASTRAYyFFB7',
        regTm: '2022-09-21T12:36:02Z',
        loginId: 'jjsk109:naver'
    },
    {
        reportJobId: 1616561212,
        statDt: '2022-09-19T15:00:00Z',
        updateTm: '2022-09-19T15:00:00Z',
        reportTp: 'AD',
        status: 'BUILT',
        downloadUrl: 'https://api.naver.com/report-download?authtoken=FztCzyRxtaILvClMTbvg47Wz5NepbeJfhBlrV%2BYGpM%2BLWDn5D24%2F9WnGq7oXSQmYgjY4v1qewz0TaDnpLnmpi2gajXzmNqSL',
        regTm: '2022-09-21T12:37:22Z',
        loginId: 'jjsk109:naver'
    },
    {
        reportJobId: 1616561553,
        statDt: '2022-09-19T15:00:00Z',
        updateTm: '2022-09-19T15:00:00Z',
        reportTp: 'AD',
        status: 'BUILT',
        downloadUrl: 'https://api.naver.com/report-download?authtoken=FztCzyRxtaILvClMTbvg47Wz5NepbeJfhBlrV%2BYGpM%2BLWDn5D24%2F9WnGq7oXSQmYgjY4v1qewz09m7LcT6iC1b4gd0raWEf9',
        regTm: '2022-09-21T12:46:25Z',
        loginId: 'jjsk109:naver'
    },
    {
        reportJobId: 1616561569,
        statDt: '2022-08-19T15:00:00Z',
        updateTm: '2022-08-19T15:00:00Z',
        reportTp: 'EXPKEYWORD',
        status: 'NONE',
        downloadUrl: '',
        regTm: '2022-09-21T12:46:54Z',
        loginId: 'jjsk109:naver'
    }
]

const c = async () => {
    //--------------------------------------------------------------------------
    // 다운로드


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
            'X-Signature': hash.toString(CryptoJS.enc.Base64),
        },
        // body: JSON.stringify(body_object),
    });
    console.log(res);
    console.log(res.headers.get('content-disposition'));
    console.log(res.headers.get('content-length'));
    console.log(res.headers.get('content-type'));
    // const result = res.json();
    // console.log(result);

}

const d = async () => {
    import CryptoJS from 'crypto-js';
    import request from 'request';
    import moment from 'moment';
    import fetch from 'node-fetch'
    import contentDisposition from 'content-disposition';
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
            'X-Signature': hash.toString(CryptoJS.enc.Base64),
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
    // const file = res.headers.get('content-disposition').split("\"")[1];
    // console.log(file);
    // const f = fs.open(file);
    // console.log(f);

    //var disposition = contentDisposition.parse('attachment; filename="EURO rates.txt"; filename*=UTF-8\'\'%e2%82%ac%20rates.txt')
    const disposition = contentDisposition.parse(res.headers.get('content-disposition'));
    console.log(disposition);

    const text = await res.text();
    console.log(text);
}
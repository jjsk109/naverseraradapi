import CryptoJS from 'crypto-js';
import request from 'request';
import moment from 'moment';
import fetch from 'node-fetch'
import contentDisposition  from 'content-disposition';

    // 리트포 생성


    const method = "GET";
    const BASE_URL = 'https://manage.searchad.naver.com/api/advanced-report/values?attributes=nccCampaignId,regnR2Nm,nccAdgroupId&values=%7B%22type%22:%22metric%22,%22fields%22:%22impCnt,clkCnt,ctr,cpc,salesAmt,ccnt,crto,ror,viewCnt%22%7D&since=2022-09-01&until=2022-09-24&startIndex=0&numberOfResults=10&requestTotalResults=1';
    const api_url = "";
    const accessKey = "01000000000cac9bfd3acf681edebc6d0419aef24e4b12ad82857abd34dc447eda34d83fa7";
    const secretKey = "AQAAAAA+GqRsk72wMhabq7m511jvwVE5I0agGeP6HAqgW/oEog==";
    const customerid = "1095825";
    const timestamp = moment().unix();
    const hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, secretKey);
    hmac.update(timestamp + '.' + method + '.' + api_url);
    const hash = hmac.finalize();
    const nowDate = moment('2022-09-10').toISOString();
    console.log(nowDate);
//moment().toISOString();
    const parm = "?authtoken=9X3%2BCSJvChh2UnIqjMlon2ExPmbWxxEOE3S%2Fk%2BN0paNm1F8USwGO%2B%2FcHqCZki1H7UTkfBYRb3Z%2BrdZjMkq6n2A9Q2EPTIU0JyMM69ETtBjt3YFyObjko5w%3D%3D"
    const body_object = {
        "item": "Campaign",
        "fromTime": nowDate,
    }
    console.log(`${BASE_URL}${api_url}${parm}`);
    console.log(hash.toString(CryptoJS.enc.Base64));
    const res = await fetch(`${BASE_URL}${api_url}${parm}`, {
        method: method,
        headers: {
           // 'content-type': 'application/json;',
           'authority': 'manage.searchad.naver.com',
           'path': '/api/advanced-report/values?attributes=nccCampaignId,regnR2Nm,nccAdgroupId&values=%7B%22type%22:%22metric%22,%22fields%22:%22impCnt,clkCnt,ctr,cpc,salesAmt,ccnt,crto,ror,viewCnt%22%7D&since=2022-09-01&until=2022-09-24&startIndex=0&numberOfResults=10&requestTotalResults=1',
            'X-Customer': customerid,
            'X-Signature': hash.toString(CryptoJS.enc.Base64),
        },
       // body: JSON.stringify(body_object),
    });
    //console.log(res);
    const text = await res.text();
    console.log(text);
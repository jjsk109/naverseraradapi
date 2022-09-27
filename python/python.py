# # 콘솔로 핼로 월드 출력하기
# print("Hello World")
# # 네이버에 로그인하기
# import requests
# from bs4 import BeautifulSoup
# # 로그인할 유저정보
# LOGIN_INFO = {
#     'user_id': 'jjsk109',
#     'user_pw': 'axisline1593!@'
# }
# # Session 생성, with 구문 안에서 유지
# # https://searchad.naver.com/my-screen 페이지 읽어오기 (로그인 후)
# with requests.Session() as s:
#     login_req = s.post('https://nid.naver.com/nidlogin.login', data=LOGIN_INFO)
#     # html 소스 가져오기
#     html = s.get('https://manage.searchad.naver.com/customers/1095825/reports').text
#     # html 소스를 파이썬 객체로 변환하기
#     print(html)
#     soup = BeautifulSoup(html, 'html.parser')
#     # my-screen의 첫번째 h2 태그의 텍스트를 출력하기
#     print(soup.text)


#  네이버 API를 이용한 검색
import os
import sys
import urllib.request
client_id = "jjsk109"
client_secret = "axisline1593!@"
encText = urllib.parse.quote("파이썬")
url = "https://openapi.naver.com/v1/search/blog?query=" + encText # json 결과
# url = "https://openapi.naver.com/v1/search/blog.xml?query=" + encText # xml 결과
request = urllib.request.Request(url)
request.add_header("X-Naver-Client-Id",client_id)
request.add_header("X-Naver-Client-Secret",client_secret)
response = urllib.request.urlopen(request)
rescode = response.getcode()
if(rescode==200):
    response_body = response.read()
    print(response_body.decode('utf-8'))
else:
    print("Error Code:" + rescode)
    


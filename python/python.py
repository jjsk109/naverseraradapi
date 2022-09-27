# 콘솔로 핼로 월드 출력하기
print("Hello World")
# 네이버에 로그인하기
import requests
from bs4 import BeautifulSoup
# 로그인할 유저정보
LOGIN_INFO = {
    'user_id': 'jjsk109',
    'user_pw': 'axisline1593!@'
}
# Session 생성, with 구문 안에서 유지
with requests.Session() as s:
    login_req = s.post('https://nid.naver.com/nidlogin.login', data=LOGIN_INFO)
    # HTML 소스 확인
    # print('login_req', login_req.text)
    # Header 확인
    # print('headers', login_req.headers)
    if login_req.status_code == 200 and login_req.ok:
        post_one = s.get('https://blog.naver.com/PostList.nhn?blogId=jjsk109')
        post_one.raise_for_status()
        soup = BeautifulSoup(post_one.text, 'html.parser')
        my_titles = soup.select(
            'div > div > div > div > div > div > div > a'
            )
        data = {}
        for title in my_titles:
            data[title.text] = title.get('href')
        print(data)
    else:
            print('로그인 실패')

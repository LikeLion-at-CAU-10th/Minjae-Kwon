# 6차 세션 과제

### 터미널 실습
- cd (Change Directory) : 디렉토리 이동
- ls (List) : 현재 디렉토리 안에 있는 파일/폴더들 표시
- mkdir (Make Directory) : 디렉토리 만들기
- pwd (Print Working Directory) : 현재 위치(경로) 표시
- . : 현재 디렉토리
- .. : 바깥 디렉토리
- ~ : 홈 디렉토리로
- / : Root 디렉토리로

### Django Server 생성
1. **pip install django** : django 설치
2. **pip install virtualenv** : 가상환경 설치 (가상환경을 켜놓고 설치한 모듈은 가상환경 내에서만 사용 가능)
3. 작업할 디렉토리로 이동 후, 가상환경을 생성(**virtual myvenv**)
4. 가상환경 켜기 (**source myvenv/bin/activate**)
5. django 프로젝트 생성 (**django-admin startproject assignment06**)
6. assignment06으로 이동해보면 **manage.py**, assignment06(프로젝트명과 동일한 이름)가 생성되어 있음
7. 가상환경 내에서 django를 다시 한번 설치하고(pip install django), manage.py가 존재하는 폴더 위치에서 서버를 실행 (**python3 manage.py runserver**)
8. 서버 주소 : <http://127.0.0.1:8000/>
9. manage.py가 있는 폴더에서 footprint라는 app을 생성(**django-admin startapp footprint**)
10. settings.py에 생성한 app을 등록
![settings.py](https://github.com/LikeLion-at-CAU-10th/Minjae-Kwon/blob/main/assignment/assignment-06/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202022-05-25%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%203.51.02.png)
#### urls.py
클라이언트에서 보낸 요청의 url에 알맞은 기능을 수행할 수 있도록 길을 안내하는 역할

#### views.py
서버의 logical code가 존재. 클라이언트에서 요청을 보내면 urls.py가 views.py에서 알맞은 함수로 연결.

11. assignment06 폴더의 urls.py에 footprint app의 urls.py를 연결
<img width="378" alt="스크린샷 2022-05-25 오후 4 05 42" src="https://user-images.githubusercontent.com/68986630/170201115-86b8eacb-f9af-4c04-8115-ad837708a207.png">
12. footprint 폴더의 urls.py에 footprint views 함수를 연결
<img width="283" alt="스크린샷 2022-05-25 오후 4 10 11" src="https://user-images.githubusercontent.com/68986630/170202032-117f4ff4-59ff-41f3-965a-7994e24e6311.png">
13. footprint 폴더의 views.py에 footprint_GET, footprint_POST 함수를 정의
14. footprint 폴더의 models.py에 Footprint Database 모델을 정의
15. **python3 manage.py makemigrations
    python3 manage.py migrate**
    명령어를 순차적으로 실행

### CORS(Cross-Origin Resource Sharing) 에러
: origin(출처)이 다른 곳으로부터 리소스가 공유됨

### CSRF(Cross-Site Request Forgery) 에러
: 해커가 특정 사이트에 로그인된 사용자에게 강제로 작업을 수행하게 하는 공격

16. 현재는 학습을 위한 서버를 구현중이므로 CSRF 관련 미들웨어의 보안처리는 주석처리.
17. main.js에서 기존 SERVER_HOST를 주석처리하고, Django server의 host로 변경
18. **pip install django-cors-headers**로 라이브러리 설치
19. corsheaders 등록 및 corsheaders 관련 미들웨어 추가
<img width="462" alt="스크린샷 2022-05-25 오후 4 52 50" src="https://user-images.githubusercontent.com/68986630/170210482-3653310d-ec0a-4969-b214-dd934086af54.png">
20. 2022.05.25 기준 cors 에러를 해결하지 못했습니다 ㅠ 구글링해서 해결 예정입니다.
![cors](https://github.com/LikeLion-at-CAU-10th/Minjae-Kwon/blob/main/assignment/assignment-06/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202022-05-25%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%205.01.57.png)

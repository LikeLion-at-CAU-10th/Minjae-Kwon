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
5. django 프로젝트 생성 (**django-admin startproject session06**)
6. session06으로 이동해보면 **manage.py**, session06(프로젝트명과 동일한 이름)가 생성되어 있음
7. 가상환경 내에서 django를 다시 한번 설치하고(pip install django), manage.py가 존재하는 폴더 위치에서 서버를 실행 (**python3 manage.py runserver**)
8. 서버 주소 : <http://127.0.0.1:8000/>
9. manage.py가 있는 폴더에서 footprint라는 app을 생성(**django-admin startapp footprint**)
10. settings.py에 생성한 app을 등록

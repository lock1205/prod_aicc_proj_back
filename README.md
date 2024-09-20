# 프로젝트 구성 #

보유하고 있는 기술을 쉽게 설명하고 B2B, B2C 형태의 기업간 기술협의서를 작성하여 맞춤 솔루션을 의뢰 할 수 있는 서비스

*벡엔드* 
git 명 : prod_aicc_proj_back
프레임워크 : node.js

*프론트엔드* 
git 명 : prod_aicc_proj_front
프레임워크 : react

DB : postgres

## 구성 기능 ##

back/
.github/           # GitHub 관련 설정

controllers/       # 컨트롤러 폴더 (API 로직 처리)

deleteTasks.js     # Task 삭제 API 컨트롤러

getTasks.js        # Task 조회 API 컨트롤러

postPackages.js    # 패키지 추가 API 컨트롤러

postTasks.js       # Task 생성 API 컨트롤러

postUser.js        # 사용자 생성 API 컨트롤러

updateTasks.js     # Task 수정 API 컨트롤러

database/              # 데이터베이스 관련 파일

database.js        # 데이터베이스 연결 설정

db.sql             # 데이터베이스 초기화 SQL 파일

routes/                # 라우트 설정

deleteRoutes.js    # Task 삭제 라우트

getRoutes.js       # Task 조회 라우트

postRoutes.js      # Task 생성 라우트

updateRoutes.js    # Task 수정 라우트

.gitignore             # Git에서 추적하지 않을 파일들 설정

index.js               # 메인 서버 파일

package-lock.json      # 프로젝트 의존성 잠금 파일

package.json           # 프로젝트 의존성 및 스크립트 설정

## 사용법 ##
1.클론을 받은 뒤
-git clone

2.npm install 로 node_module을 설치

3. env 파일 생성
DB_HOST,DB_USER,DB_PASS,DB_PORT,DB_NAME,SECRET_KEY
6가지 항목을 추가

##





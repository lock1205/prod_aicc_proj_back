-- 생성된 테이블

CREATE TABLE task (
    _id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    date TEXT NOT NULL,
    isCompleted BOOLEAN NOT NULL DEFAULT false,
    isImportant BOOLEAN NOT NULL DEFAULT false,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    userId TEXT NOT NULL
);

-- 데이터 조회

SELECT * FROM task


-- 특정 사용자 데이터 필터 조회

SELECT * FROM task where userId = 'hoon'


-- 데이터 추가

INSERT INTO task(id, title, description, date, isCompleted, isImportant, userId) values('1234','할일1','할일1 설명','2021-08-01','lee')



--사용자 테이블 생성--
CREATE TABLE users (
    google_auth TEXT,
    _key SERIAL PRIMARY KEY,
    id TEXT NOT NULL,
    password TEXT NOT NULL,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    company_name TEXT NOT NULL,
    level TEXT NOT NULL,
    phone INT NOT NULL,
    user_create_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

--협의서 테이블 생성--
CREATE TABLE agreement (
    arg_num TEXT,
    _key SERIAL PRIMARY KEY,
    company_name TEXT NOT NULL,
    level TEXT NOT NULL,
    master_name TEXT NOT NULL,
    master_tel TEXT NOT NULL,
    end_date TEXT NOT NULL,
    sum_money TEXT NOT NULL,
    arg_edit BOOLEAN NOT NULL DEFAULT false,
    arg_del BOOLEAN NOT NULL DEFAULT false,
    arg_cancel BOOLEAN NOT NULL DEFAULT false,
    ai_data text,
    ai_media text,
    ai_lang text
);

-- 패키지 테이블 생성 --

CREATE TABLE packages{
    package_name text,
    package_desc text,
    ai_data text,
    ai_media text,
    ai_lang text
    ai_image text
}

-- 테이블 이름 변경 --
ALTER TABLE {테이블명} RENAME TO {새 테이블명};

--컬럼 추가 생성--
ALTER TABLE TEST ADD COLUMN tel varchar(11) NOT NULL;

--컬럼 변경--
ALTER TABLE 테이블명 RENAME COLUMN 컬럼명 TO 변경할컬럼명; //컬럼명 변경

ALTER TABLE 테이블명 RENAME COLUMN 컬럼명 TYPE 변경할데이터타입; //컬럼 데이터 타입 변경


--컬럼 타입 변경 ex)TEST address 컬럼의 데이터 타입변경--

ALTER TABLE TEST ALTER COLUMN address TYPE varchar(120);

--컬럼 삭제--
ALTER TABLE 테이블명 DROP COLUMN 컬럼명;


INSERT INTO users(name, email, password) values('1234','할일1','할일1 설명','2021-08-01','lee')


--컬럼 데이터 값 변경--
UPDATE 테이블 이름
SET 컬럼 이름 = '변경 값'
WHERE 컬럼 이름 = 기존 값;


--컬럼 DEFAULT 값 추가--

ALTER TABLE [tb명] ALTER COLUMN [col명] SET DEFAULT nextval('시퀀스명');

--컬럼 DEFAULT 값 제거--

ALTER TABLE [tb명] ALTER [col명] DROP DEFAULT;

--컬럼 NOT NULL 세팅--
ALTER TABLE [tb명] ALTER COLUMN [col명] SET NOT NULL;

--컬럼 NOT NULL 제거--

ALTER TABLE [tb명] ALTER COLUMN [col명] DROP NOT NULL;
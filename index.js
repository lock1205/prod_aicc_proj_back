const express = require('express'); //express 모듈 불러오기
const cors = require('cors'); //cors 모듈 불러오기
const PORT = '8000';
const cookieParser = require('cookie-parser');

const app = express(); //express 모듈을 사용하기 위해 app 변수에 할당한다.

/*************************************************/
const { spawn } = require('child_process'); //실행시킬 수 있는 다른 형태의 파일을 가져온다.

const path = require('path');
const bodyParser = require('body-parser');

console.log(path.join(__dirname));

/*************************************************/

//app.use(cors());
app.use(cookieParser());
app.use(express.json()); //express 모듈의 json()메소드를 사용한다.

app.use(
  cors({
    origin: 'https://aiccprojfront.gorideadpoets.com',
    //origin: 'http://localhost:3000',
    credentials: true,
  })
); //http, https 프로토콜을 사용하는 서버 간의 통신을 허용한다.
// const corsOptions = {
//   origin: 'https://aiccprojfront.gorideadpoets.com', // 클라이언트의 주소를 명시
//   credentials: true, // 자격 증명 허용
// };

// Credentialed Request (인증정보를 포함한 요청)
// 다른 출처 사이의 통신에서 보안을 강화하고 싶을 때 사용하는 방법으로, 헤더에 인증 정보를 담아 요청을 보낸다.
// 기본적으로 출처가 다른 경우에는 쿠키나 인증 관련 헤더(헤더에 Authorization 항목이 있는 요청)를 보낼 수 없다. 민감한 정보이기 때문이다. 때문에 그것이 가능하도록 하려면 프론트와 서버 양측 모두 CORS를 설정해야 한다.
// 프론트엔드의 요청과 서버의 응답 모두 CORS 설정이 필요하다.

// app.get('/', (req, res) => {
//   res.send('production back site private!');
// });

/************************************************* */

app.use(bodyParser.json());

app.post('/chat', (req, res) => {
  const sendQuestion = req.body.question;
  //spawn으로 파이썬 스크립트 실행
  //실행할 파일(app.py)와  매개변수로 저장된 파일명을 전달

  // EC2 서버에서 현재 실행 중인 Node.js 파일의 절대 경로를 기준으로 설정합니다.
  // const execPython = path.join(__dirname, 'biz_openai.py');

  //ec2 서버에서 실행하는 절대 경로 : 개발 테스트시 사용 불가
  //const pythonPath = path.join(__dirname, 'venv', 'Scripts', 'python.exe');
  //const net = spawn(pythonPath, [execPython, sendQuestion]);

  //리눅스 환경에서 아래와 같이 사용한다.
  // // EC2 서버에서 현재 실행 중인 Node.js 파일의 절대 경로를 기준으로 설정합니다.
  const scriptPath = path.join(__dirname, 'biz_openai.py');
  const pythonPath = path.join(__dirname, 'venv', 'bin', 'python3');

  // Spawn the Python process with the correct argument
  const result = spawn(pythonPath, [scriptPath, sendQuestion]);

  output = '';

  //파이썬 파일 수행 결과를 받아온다
  result.stdout.on('data', function (data) {
    output += data.toString();
  });
  result.on('close', (code) => {
    if (code == 0) {
      res.status(200).json({ answer: output });
    } else {
      res.status(500).send('something want wrong');
    }
  });
  result.stderr.on('data', (data) => {
    console.error(`stderr:${data}`);
  });
});

/************************************************* */

app.use(require('./routes/deleteRoutes'));
app.use(require('./routes/postRoutes'));
app.use(require('./routes/getRoutes'));
app.use(require('./routes/updateRoutes'));

app.listen(PORT, () => console.log(`Server is running on ${PORT}`)); //서버를 정상 실행할 시 메시지 출력

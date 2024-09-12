const express = require('express'); //express 모듈 불러오기
const cors = require('cors'); //cors 모듈 불러오기
const PORT = '8080';
const cookieParser = require('cookie-parser');

const app = express(); //express 모듈을 사용하기 위해 app 변수에 할당한다.

//app.use(cors());
app.use(cookieParser());
app.use(express.json()); //express 모듈의 json()메소드를 사용한다.

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
); //http, https 프로토콜을 사용하는 서버 간의 통신을 허용한다.

// Credentialed Request (인증정보를 포함한 요청)
// 다른 출처 사이의 통신에서 보안을 강화하고 싶을 때 사용하는 방법으로, 헤더에 인증 정보를 담아 요청을 보낸다.
// 기본적으로 출처가 다른 경우에는 쿠키나 인증 관련 헤더(헤더에 Authorization 항목이 있는 요청)를 보낼 수 없다. 민감한 정보이기 때문이다. 때문에 그것이 가능하도록 하려면 프론트와 서버 양측 모두 CORS를 설정해야 한다.
// 프론트엔드의 요청과 서버의 응답 모두 CORS 설정이 필요하다.

app.get('/', (req, res) => {
  res.send('production back site!');
});

app.use(require('./routes/deleteRoutes'));
app.use(require('./routes/postRoutes'));
app.use(require('./routes/getRoutes'));
app.use(require('./routes/updateRoutes'));

app.listen(PORT, () => console.log(`Server is running on ${PORT}`)); //서버를 정상 실행할 시 메시지 출력

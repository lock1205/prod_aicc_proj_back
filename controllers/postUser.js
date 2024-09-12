const database = require('../database/database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const salt = 10;

exports.postUser = async (req, res) => {
  try {
    const hash_password = await bcrypt.hash(req.body.password, salt); //10자리 수로 입력된 패스워드 encode
    const values = [
      req.body.id,
      hash_password,
      req.body.name,
      req.body.email,
      req.body.company,
      req.body.level,
      req.body.phone,
    ];
    await database.query(
      'INSERT INTO users(id, password, name, email, company_name, level, phone ) values($1,$2,$3,$4,$5,$6,$7)',
      values
    );

    return res.status(201).json({ message: 'Signup successfully' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { rows } = await database.query(
      'select * from users where email = $1',
      [req.body.email]
    );

    if (!rows.length) {
      return res.status(404).json({ message: 'User not found' });
    }

    const compare = await bcrypt.compare(req.body.password, rows[0].password); //암호화된 부분 비교

    if (!compare) {
      return res.status(401).json({ message: 'Password not matched' });
    }

    const email = rows[0].email;
    const user_key = rows[0]._key;
    const id = rows[0].id;
    const token = jwt.sign({ email, user_key, id }, process.env.SECRET_KEY, {
      expiresIn: '1d',
    }); //암호화될 데이터, 비밀키, token 잔존시간 (1d = 1day)

    res.cookie('token', token, {
      httpOnly: true, //클라이언트에서 쿠키를 자바스크립트로 접근하지 못하게 함
      sameSite: 'None', //CORS 상황에서 쿠키가 전달될 수 있도록 설정
    });

    return res.status(201).json({ token: token });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

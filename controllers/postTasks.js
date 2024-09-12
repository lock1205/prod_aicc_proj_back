const database = require('../database/database');
// const { v4: uuid4 } = require('uuid');

exports.postTasks = async (req, res) => {
  try {
    const values = [
      req.body.key,
      req.body.company_name,
      req.body.level,
      req.body.master_name,
      req.body.master_tel,
      req.body.end_date,
      req.body.sum_money,
      req.body.ai_data,
      req.body.ai_media,
      req.body.ai_lang,
      req.body.ai_image,
      req.body.title,
      req.body.description,
      req.body.status,
    ];
    await database.query(
      'INSERT INTO agreement(user_key,company_name,level,master_name,master_tel,end_date,sum_money,ai_data,ai_media,ai_lang,ai_image,title,description,status) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)',

      values
    );

    return res.status(201).json({ message: 'Agreement post successfully' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.postStatusTasks = async (req, res) => {
  const value = req.body.status;
  try {
    if (value != '전체') {
      allTasks = await database.query(
        'SELECT * FROM agreement where status = $1',
        [value]
      ); // agreement테이블에서 모든 행을 선택
    } else {
      allTasks = await database.query('SELECT * FROM agreement ');
    }
    return res.status(201).json(allTasks.rows);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

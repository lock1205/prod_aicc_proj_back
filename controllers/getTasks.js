const database = require('../database/database');

exports.getTasks = async (req, res) => {
  try {
    const allTasks = await database.query('SELECT * FROM agreement'); // agreement테이블에서 모든 행을 선택

    return res.status(201).json(allTasks.rows);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.getUserTasks = async (req, res) => {
  const value = req.params.user_key;
  try {
    const userTasks = await database.query(
      'SELECT * FROM agreement where user_key=$1',
      [value]
    ); // agreement테이블에서 모든 행을 선택

    return res.status(201).json(userTasks.rows);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.getSearchTasks = async (req, res) => {
  const value = req.params.text;
  try {
    const searchTasks = await database.query(
      "select * from agreement where company_name like '%'||$1||'%' or title like '%'||$1||'%'", //이부분 필히 알아놔야하는 항목
      [value]
    ); //agreement 테이블에서 검색단어가 들어간 문서제목이나 회사이름 검색
    return res.status(201).json(searchTasks.rows);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// 패키지
exports.getCategory = async (req, res) => {
  try {
    const allCategory = await database.query(
      'SELECT ai_data,ai_media,ai_lang,ai_image,package_name,package_desc FROM packages'
    ); // agreement테이블에서 ai 4행을 선택

    return res.status(201).json(allCategory.rows);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

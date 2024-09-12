const database = require('../database/database');

exports.updateMyAgreeTask = async (req, res) => {
  const {
    company_name,
    level,
    master_name,
    master_tel,
    end_date,
    sum_money,
    ai_data,
    ai_media,
    ai_lang,
    title,
    description,
    ai_image,
    arg_num,
  } = req.body;
  try {
    const result = await database.query(
      'UPDATE agreement SET company_name = $1, level = $2, master_name = $3, master_tel = $4, end_date = $5, sum_money = $6, ai_data = $7, ai_media = $8, ai_lang = $9, ai_image = $10, title = $11, description = $12    WHERE arg_num = $13',
      [
        company_name,
        level,
        master_name,
        master_tel,
        end_date,
        sum_money,
        ai_data,
        ai_media,
        ai_lang,
        ai_image,
        title,
        description,
        arg_num,
      ]
    );
    return res.status(200).json({ message: 'Task Updated Successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Update Completed Fail' + error });
  }
};

exports.updateStatusTask = async (req, res) => {
  const { status, arg_num } = req.body;

  try {
    const result = await database.query(
      'UPDATE agreement SET status = $1 WHERE arg_num = $2',
      [status, arg_num]
    );
    return res.status(200).json({ message: 'Status Updated Successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Update Completed Fail' + error });
  }
};

exports.updateStatusCommentTask = async (req, res) => {
  const { status, comment, arg_num } = req.body;

  try {
    const result = await database.query(
      'UPDATE agreement SET status = $1, comment = $2 WHERE arg_num = $3',
      [status, comment, arg_num]
    );
    return res.status(200).json({ message: 'Status Updated Successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Update Completed Fail' + error });
  }
};

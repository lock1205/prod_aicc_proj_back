const database = require('../database/database');

exports.deleteTask = async (req, res) => {
  const arg_num = req.params.arg_num;

  try {
    const result = await database.query(
      'DELETE FROM agreement WHERE arg_num = $1',
      [arg_num]
    );
    return res.status(200).json({ message: 'Task Deleted Successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Get Items Fail' + error });
  }
};

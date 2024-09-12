const { deleteTask } = require('../controllers/deleteTasks');

const router = require('express').Router();

router.delete('/delete_task/:arg_num', deleteTask);

module.exports = router;

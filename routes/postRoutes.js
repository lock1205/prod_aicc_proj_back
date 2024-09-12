const router = require('express').Router();
const { postPackages } = require('../controllers/postPackages');
const { postTasks, postStatusTasks } = require('../controllers/postTasks');
const { postUser, loginUser } = require('../controllers/postUser');

// const { postTasks } = require('../controllers/postTask');
// const { postUser, loginUser } = require('../controllers/postUser');
//파일이름과 상관없이 해당 파일의 exports되는 함수의 이름과 동일하게 파라미터를 지정해야한다.!!!!!

// router.post('/post_tasks', postTasks); //파일이름과 상관없이 해당 파일의 exports되는 함수의 이름과 동일하게 파라미터를 지정해야한다.!!!!!
// router.post('/register', postUser);
// router.post('/login', loginUser);

router.post('/register_user', postUser);
router.post('/post_tasks', postTasks);
router.post('/login_user', loginUser);
router.post('/post_status', postStatusTasks);
router.post('/post_Packages', postPackages);

module.exports = router;

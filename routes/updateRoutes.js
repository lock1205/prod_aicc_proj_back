const router = require('express').Router();

const {
  updateMyAgreeTask,
  updateStatusTask,
  updateStatusCommentTask,
} = require('../controllers/updateTasks');

// patch는 변경 사항에 대한 부분만 업데이트 한다.
// put은 전체를 업데이트 한다.

router.put('/update_agree', updateMyAgreeTask);
router.put('/update_status', updateStatusTask);
router.put('/update_comment_status', updateStatusCommentTask);

module.exports = router;

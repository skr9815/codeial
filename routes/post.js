const express =  require('express');

const router =express.Router();
const postController =  require('../controllers/post_controllers');



router.get('/new',postController.new); 

module.exports = router;

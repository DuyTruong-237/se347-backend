const postController = require('../controllers/postController');
const router = require('express').Router();
const upload = require('../middleware/upload');





router.post('/addPost', upload.array('imgURLs') , postController.addPost);


router.get('/readPost', postController.readPost);


router.delete('/deletePost/:idPost', postController.deletePost);



router.put('/likePost',postController.likePost);
router.post('/updatePost/:idPost;', postController.updatePost);


module.exports = router;
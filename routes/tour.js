const tourController = require('../controllers/tourController');
const router = require('express').Router();
const upload = require('../middleware/upload');





router.post('/addTour', upload.array('imgURLs') , tourController.addTour);


router.get('/readTour', tourController.readTour);


router.delete('/deleteTour', tourController.deleteTour);



router.put('/likeTour',tourController.likeTour);
router.post('/updateTour', tourController.updateTour);


module.exports = router;
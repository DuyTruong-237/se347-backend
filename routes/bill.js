const billController = require('../controllers/billController');
const router = require('express').Router();
const upload = require('../middleware/upload');



router.post('/addBill',  billController.addBill);


router.get('/readBill', billController.readBill);

 
router.delete('/deleteBill', billController.deleteBill);




router.post('/updateBill', billController.updateBill);


module.exports = router;
const router = require('express').Router();
const adminController = require('../controller/adminController');

router.get('/', adminController.getProduct)
router.get('/create', adminController.createProduct)
router.get('/edit/:id', adminController.editProduct)
router.get('/delete/:id', adminController.deleteProduct)

module.exports = router
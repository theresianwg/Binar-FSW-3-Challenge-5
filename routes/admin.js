const router = require('express').Router();
const Auth = require('../middleware/auth');
const adminController = require('../controller/adminController');

router.get('/', Auth, adminController.getProduct)
router.get('/create', Auth, adminController.createProduct)
router.get('/edit/:id', Auth, adminController.editProduct)
router.get('/delete/:id', Auth, adminController.deleteProduct)

module.exports = router
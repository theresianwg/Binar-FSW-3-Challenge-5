const router = require('express').Router();

const adminController = require('../controller/admin');
// const Auth = require('../middleware/auth');

router.get('/', admin.getProduct);

module.exports = router
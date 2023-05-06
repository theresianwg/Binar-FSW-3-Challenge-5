const router = require('express').Router();
const Auth = require('../middleware/auth');
const shopController = require('../controller/shopController');

// shops
router.get('/', Auth, shopController.getShops)
router.get('/search', Auth, shopController.searchShops)
router.get('/:id', Auth, shopController.getShopById)
router.put('/:id', Auth, shopController.editShop)
router.delete('/:id',Auth, shopController.deleteShop)
router.post('/shops', Auth, shopController.createShop)

module.exports = router

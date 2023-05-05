const router = require('express').Router();
const Auth = require('../middleware/auth');
const shopController = require('../controller/shopController');

// shops
router.get('/', Auth, shopController.getShops)
router.get('/search', shopController.searchShops)
router.get('/:id', shopController.getShopById)
router.put('/:id', shopController.editShop)
router.delete('/:id', shopController.deleteShop)
router.post('/shops', Auth, shopController.createShop)

module.exports = router

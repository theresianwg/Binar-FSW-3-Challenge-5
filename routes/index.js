const router = require('express').Router();

// import package swagger 
const swaggerUi = require('swagger-ui-express');
// import file json
const swaggerDocument = require('')

const productController = require('../controller/productController');
const shopController = require('../controller/shopController');

// middlewares
const Auth = require('../middleware/auth');
const checkRole = require('../middleware/checkRole');

// API docs => dokumentasi API
router.use('/api-docs', swaggerUi.serve)
router.use('/api-docs', swaggerUi.setup(swaggerDocument))

const User = require('./users');
 
router.use('/api/v1/users/', User);

// API
// product
router.get('/products', productController.getProducts)
router.get('/products/search', productController.searchProduct)
router.get('/api/products/:id', productController.getProductById)
router.put('/products/:id', productController.editProduct)
router.delete('/products/:id', productController.deleteProduct)
router.post('/api/products', productController.createProduct)

// shops
router.get('/shops', Auth, shopController.getShops)
router.get('/shops/search', Auth, shopController.searchShops)
router.get('/api/shops/:id', Auth, shopController.getShopById)
router.put('/shops/:id',Auth, shopController.editShop)
router.delete('/shops/:id', Auth, shopController.deleteShop)
router.post('/api/shops', Auth, checkRole('admin'), shopController.createShop)

// Dashboard

module.exports = router
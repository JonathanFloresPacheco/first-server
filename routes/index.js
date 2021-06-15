const exprees = require('express');
const router = exprees.Router();
const IndexController = require('../controllers/index')

router.get('/',IndexController.index);

router.get('/products',IndexController.listproducts);

router.post('/new-product',IndexController.newproducts);

module.exports = router;
const exprees = require('express');
const router = exprees.Router();
const IndexController = require('../controllers/index')
const items = [
    {id:1,name:"product1" },
    {id:2,name:"product2" },
    {id:3,name:"product3" },
];

router.get('/',IndexController.index);

router.get('/products',IndexController.listproducts);

router.post('/new-product',IndexController.newproducts);

module.exports = router;
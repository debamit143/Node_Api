const express = require('express')
const router = express.Router()
const {getAllProducts,addProduct} = require('../Controllers/productController')

router.route('/').get(getAllProducts)
router.route('/').post(addProduct)

module.exports = router;
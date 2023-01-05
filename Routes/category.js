const express = require('express')
const router = express.Router()
const {addCategory,allCategory, singleCategory, updateCategory, deleteCategory} = require('../Controllers/categoryController')

router.route('/').get(allCategory)
router.route('/').post(addCategory)
router.route('/single').post(singleCategory)
router.route('/update').post(updateCategory)
router.route('/delete').post(deleteCategory)

module.exports = router;
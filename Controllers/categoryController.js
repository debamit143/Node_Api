const categoryModel = require('../Models/CategorySchema')



// -------------------------Add Category ------------------------

const addCategory = async (req, res) => {
    const name = req.body.name
    const isDeleted = req.body.isDeleted

    try {
        if (!name) return res.status(422).json({ 'status': false, 'msg': 'Name Field Required' })
        const addData = await new categoryModel({
            name: name,
            isDeleted: isDeleted
        })
        await addData.save()
        res.status(201).json({ 'status': true, 'msg': 'Category Added Successfully' })

    } catch (error) {
        res.status(404).json({ 'status': false, 'msg': 'Something Went Wrong' })
    }
}



// --------------------------------GetallCategory----------------------------

const allCategory = async (req, res) => {
    try {
        const allData = await categoryModel.find({ isDeleted: false })
        res.status(200).json({ 'status': true, "data": allData })

    } catch (error) {
        res.status(404).json({ 'status': false, 'msg': 'Something Went Wrong' })
    }
}


// -----------------------------------GetCategoryById----------------------------------

const singleCategory = async (req, res) => {
    const _id = req.body._id
    if (!_id) return res.status(422).json({ 'status': false, 'msg': 'Please Provide id' })
    try {
        const singleData = await categoryModel.findById({ _id: _id })
        res.status(200).json({ 'status': true, "data": singleData })
    } catch (error) {
        res.status(404).json({ 'status': false, 'msg': 'Something Went Wrong' })
    }
}


// --------------------------------------UpdateCategory --------------------------------------

const updateCategory = async (req, res) => {
    const _id = req.body._id
    const name = req.body.name
    const isDeleted = req.body.isDeleted
    if (!_id) return res.status(422).json({ 'status': false, 'msg': 'Please Provide id' })
    try {
        const singleData = await categoryModel.findById({ _id: _id })
        singleData.name = name
        singleData.isDeleted = isDeleted
        const updateData = await singleData.save()
        res.status(200).json({ 'status': true, 'msg':'Category Updated Succesfully' })
    } catch (error) {
        res.status(404).json({ 'status': false, 'msg': 'Something Went Wrong' })
    }
}



// -------------------------------------------DeleteCategory --------------------------------------

const deleteCategory = async (req, res) => {
    const _id = req.body._id
    if (!_id) return res.status(422).json({ 'status': false, 'msg': 'Please Provide id' })
    try {
        const deleteData = await categoryModel.findById({ _id: _id, isDeleted: false })
        deleteData.isDeleted = true
        await deleteData.save()
        res.status(200).json({ 'status': true, 'msg': 'Category Deleted Succesfully', "data": deleteData })
    } catch (error) {
        res.status(404).json({ 'status': false, 'msg': 'Something Went Wrong' })
    }
}


module.exports = { addCategory, allCategory, singleCategory, updateCategory, deleteCategory }
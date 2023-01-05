const ProductModel = require('../Models/ProductSchema')
const {isImageofBase64,randName} = require('../Helper/common')

// ----------------------------------------Get All Products ----------------------------------
const getAllProducts = async (req, res) => {

    res.status(200).json({ msg: 'All Products' })
}


// -----------------------------------------Add Product -----------------------------------

const addProduct = async (req, res) => {
    // console.log(req.body)
    // if (!commonHelper.isImageofBase64(req.body.base64image)){
    //     return res.status(481).json({status:'false',msg:'Invalid image'})
    // }
    const name = req.body.name
    const price =req.body.price
    const featured = req.body.featured
    const isActve = req.body.isActve
    const image_url1_base64 = req.body.image_url1_base64
    const image_url2_base64 = req.body.image_url2_base64
    const image_url3_base64 = req.body.image_url3_base64
    const imageName = randName(10)+Date.now() + '.png'
    // console.log(image)
    try {
        if(!name || !price || !image_url1){
            res.status(404).json({ status: 'false', msg: 'Something Went wrong' })
        }else{
            const image_url1 = image_url1_base64
            const image_url2 = image_url2_base64
            const image_url3 = image_url3_base64
            const addData = await new ProductModel({
                name:name,
                price:price,
                featured:featured,
                isActve:isActve,
                image_url1:image_url1,
                image_url2:image_url2,
                image_url3:image_url3
            })
            await addData.save()
            res.status(201).json({ status: 'true', msg: 'Product added' , data:addData })
        }   

    } catch (error) {
        console.log(error)
        res.status(404).json({ status: 'false', msg: 'Bad request' })
    }

}



module.exports = { getAllProducts, addProduct }
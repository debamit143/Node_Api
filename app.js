require('dotenv').config()

const express = require('express')
const dbConnect = require('./Db/connect.js')

const app = express()
app.use(express.json())

const port = process.env.PORT || 5000


const product_route = require('./Routes/products')
const category_route = require('./Routes/category')

//  -----Products Routes---
app.use('/api/product', product_route)

// ----Category Routes -----
app.use('/api/category',category_route)

const start = async () => {
    try {
        await dbConnect(process.env.URI)
        app.listen(port, () => {
            console.log(`Server is connected with PORT ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}
start()

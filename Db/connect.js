const mongoose = require('mongoose')
const dbConnect = (uri) => {
    console.log('db conected')
    mongoose.set('strictQuery', false)
    return mongoose.connect(uri, { useNewUrlParser: true,useUnifiedTopology: true });
}

module.exports = dbConnect;
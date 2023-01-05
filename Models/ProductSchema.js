const express = require('express')
const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
    name :{
        type:String,
        required: true,
    },
    price:{
        type: Number,
        required: true
    },
    featured:{
        type:Boolean,
        default:false
    },
    isActve:{
        type:Boolean,
        default:true
    },
    image_url1 :{
        type:String,
        required:true
    },
    image_url2 :{
        type:String,
    },
    image_url3 :{
        type:String,
    },
    category:{type:Array}
})

module.exports = mongoose.model("Product",productSchema)
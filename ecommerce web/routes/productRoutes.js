const express = require('express');
const asyncHandler = require('express-async-handler');
const Product = require('../models/productModel');


const productRoutes = express.Router()


productRoutes.get('/', asyncHandler(async(req, res)=>{
        const products = await Product.find({})
        res.json(products)
        console.log(products)
}))

productRoutes.get('/:id', asyncHandler(async(req,res)=>{
        const product = await Product.findById(req.params.id)
        if(product){
            res.json(product)
        } else{
            res.status(404)
            throw new Error(`product not found`)
        }
        
}))

module.exports=productRoutes;
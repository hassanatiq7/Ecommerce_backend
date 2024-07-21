const express = require('express');
const User = require('./models/userModel');
const user = require('./userData');
const Product = require('./models/productModel');
const products = require('./product');
const importData = express.Router();
const asyncHandler = require('express-async-handler')

importData.post('/user',
                 asyncHandler(async (req, res) => {
    try {
        // Assuming this is a function that removes existing users
        const importUser = await User.insertMany(user); // Assuming `user` is correctly defined and contains user data
        res.send({ importUser });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}
)

);

importData.post('/product',asyncHandler(async(req,res)=>{
    try {
        const importProduct = await Product.insertMany(products)
        res.send({importProduct})
    } catch (error) {
        res.status(500).send({error: error.message})    
        console.log(error)    
    }
}
)
)


module.exports = importData; 

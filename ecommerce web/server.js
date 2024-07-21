const products = require('./product');
const express = require('express');
const dotenv = require('dotenv');
const db_connection = require('./config/MongoDb')
const users = require('./userData.js');
const importData  = require('./dataImports.js');
const productRoutes = require('./routes/productRoutes.js');
const { notFound, errorHandler } = require('./middlewares/error.js');

dotenv.config()

const app = express()
const PORT = process.env.PORT ;

db_connection()


// API
app.use('/importdata', importData)
app.use('/product', productRoutes)
app.use('/product/:id',productRoutes)
// ERROR_HANDLERS
app.use(notFound)
app.use(errorHandler)




// app.get("/product", (req,res)=>{
//     res.json(products)
// })


// app.get("/product/:id", (req, res) => {
//     console.log("Request received for product ID:", req.params.id);
//     const product = products.find((p) => p.__id === req.params.id);
//     if (!product) {
//         return res.status(404).json({ error: "Product not found" });
//     }
//     res.json(product);
// });


// app.get("/users", (req,res)=>{
//     res.json(users)
// })


// app.get("/", (req,res)=>{
//     res.send("API running")
// })


app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`)
})

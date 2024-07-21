const mongoose = require('mongoose');
const products = require('../product');

const reviewSchema = mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    rating:{
        type:Number,
        require:true,   
    },
    comment:{
        type:String,
        require: true,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref:'User',
        
    }

})

const productSchema = mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    thumbnail:{
        type:String,
        require:true
    },
    image:{
        type:[String],
        require:true,
        default:[]
    },
    description:{
        type:String,
        require: true,
    },
    review: [reviewSchema],

    rating:{
        type:Number,
        require:true,
        default:0,
    },
    numReviews:{
        type:Number,
        require:true,
        default:0,
    },
    price:{
        type:Number,
        require:true,
        default:0,
    },
    countInStock:{
        type:Number,
        require:true,
        default:0,
    },


},

    {
        timestamps:true
    
    }

)

const Product = mongoose.model('Product', productSchema)

module.exports=Product

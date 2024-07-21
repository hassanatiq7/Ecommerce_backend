const mongoose = require('mongoose');

const orderDetail = mongoose.Schema({
    name:{type:String, require:true,},
    qty:{type:String, require:true,},
    image:{type:String, require:true,},
    price:{type:String, require:true,},
    product:{type: mongoose.Schema.Types.ObjectId,
    require:true,
    ref:'Product'}
})

const shippingDetail = mongoose.Schema({
    address:{type:String, require:true},
    city:{type:String, require:true},
    postalCode:{type:String, require:true},
    country:{type:String, require:true},
})

const paymentDetails = mongoose.Schema({
    id:{type:String,},
    status:{type:String,},
    updateTime:{type:String,},
    email_address:{type:String,}
})

const orderSchema = mongoose.Schema({
    user:{
        type:String,
        require:true,
        ref:'User',
    },
    orderItems:[orderDetail],
    shippingAddress:[shippingDetail],
    paymentMethod:{
        type:String,
        require:true,
        default:'Paypal',
    },
    paymentResult:[paymentDetails],
    taxPrice:{
        type:String,
        require:true,
        default:0.0,
    },
    isPaid:{
        type:Boolean,
        require:true,
        default:false,
    },
    paidAt:{
        type:Date,
    },
    isDelivered:{
        type:Boolean,
        require:true,
        default:false
    },
    deliveredAt:{
        type:Date,
    },
},
{
    timestamps:true

})

const Order = mongoose.model('Order', orderSchema)

export default Order;
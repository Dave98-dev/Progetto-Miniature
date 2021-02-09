const mongoose = require('mongoose')

const ShopSchema = mongoose.Schema({
    author:{
        type:String,
        required:true
    },
    code:{
        type:String,
        required:true        
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:false
    },
    bannerUrl:{
        type:String,
        required:false
    },
    items:[{
        price:Number,
        name:String
    }]
});

module.exports = mongoose.model('Shop',ShopSchema);
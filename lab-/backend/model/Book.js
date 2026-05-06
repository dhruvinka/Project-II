const mongoose = require('mongoose');

const bookschema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author: String,
  price: Number

})

module.exports=mongoose.model('Book',bookschema)


const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

name:{
    type: String,
    minlength: 4,
    maxlength: 20,
    unique: true,
    required: [true, "name required."],
},
email:{
    type:String,
    trim: true,
    lowercase: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: "Please enter a valid email",
    },
    required: [true, "Email required"],
},
password:{
    type:String,
    required:true,
    minlength: 6,
    maxlength: 12,
},
cell:{
    type: String,
    unique:true,
    validate: {
      validator: function(v) {

        // cell number should be like this formate  03xx-1234567
        
        return /\d{4}-\d{7}/.test(v);
      },
      message: props => `${props.value} is not a valid phone number!`
    },
    required: [true, 'User phone number required']
}

})

const User = mongoose.model('User',userSchema)

module.exports = User;

// after creating a Schema for mongodb now go back to file index.js  and write our 
// first function of crud operation 
import mongoose from "mongoose";

const userShema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"username is required"],
        unique:true
    },
    password:{
        type:String,
       
        required:[true,"password is required"]

    },
    email:{
        type:String,
        required:[true,"email is required"],
         unique:true

    },
    user_type:{
         type:String,
         enum:["admin","air","intelligence"],
        required:[true,"user_type is required"]

    },
    last_login:{
        type:Date,
       default:null

    }

})

const User = mongoose.model('User',userShema)
export default User
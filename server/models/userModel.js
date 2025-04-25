import mongoose, { Mongoose } from "mongoose";

const userSchema = new Mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true,
        unique:true
    },
    password:{
        type: String,
        require: true
    },
    creditBalance:{
        type: Number,
        default:5
    },
})


const userModel= mongoose.models.user || mongoose.model("user",userSchema);


export default userModel;
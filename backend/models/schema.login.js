import { Schema,model } from "mongoose";

const sch = new Schema({
    id:{
        type:Number,
        required: true  
       },
    username:{
        type:String,
        required: true
    },
    password:{
        type: String,
        required : true
    }
});

const login = model("login",sch)
export default login;
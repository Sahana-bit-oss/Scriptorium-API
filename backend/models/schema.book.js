import { Schema, model } from "mongoose";

const schema = new Schema({
   id:{
    type:Number,
    required: true
    
   },
    title:{
        type : String,
        required : true
    },
    author:{
        type: String,
        required: true
    },
    PublishYear: {
        type : Number,
        required:true
    }
});

const Book = model("Book",schema);

export default Book;
import express from "express";
import bookroutes from "./routes/books.route.js"
import connectDB from "./lib/db.js";
import users from "./users.js";
import cors from "cors";
// import loginrouters from "./routes/login.routes.js"

const app = express();
const PORT = 6487;
//const data = require("./data/mybooksdatas.js");
//middleware

app.get("/api/user",(req,res)=>{
    res.send(users);
})

// app.get("/login",(req,res)=>{
//     res.
// })

app.use(express.json());

app.use(cors());
//app.use(express.urlencoded({extended: true}));
//connecting db
connectDB();



app.get('/',(req,res) =>{
    res.json({msg: "Hello Students!"});
});

//middleware
app.use('/books',bookroutes);

// app.use()

app.listen(PORT,() =>{
    console.log(`The server is runing at http://localhost:${PORT}`);
})
import express from "express";
//import data from "./datas/mybooksdatas.js";
//import data from "./datas/mybooksdatas.js";
import {
    bookindex,
    bookcreating,
    bookdeleting,
    bookdetail,
    bookupdating,
    getdatas,
} from "../Controllers/books.controllers.js";
//const datas = require('./datas/mybooksdatas.js');
//CURD Functionality of books

const router = express.Router();

//R - For reading 

router.get("/index",bookindex);


// for getting book detail
router.get("/:id",bookdetail);


//C - for creating books 
router.post("/create",bookcreating);

// u - for updating books 
router.put("/update/:id",bookupdating);

//d - for deleting books
router.delete("/delete/:id",bookdeleting);

router.get("/api/datas",getdatas);


export default router;
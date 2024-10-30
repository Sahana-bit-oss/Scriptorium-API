import Book from "../models/schema.book.js";

export const bookindex = async(req,res) => {
    try {
        const Books = await Book.find();
        res.json(Books)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

export const bookcreating = async(req,res) => {
   

    const newBook = new Book({
        id : req.body.id,
        title:req.body.title,
        author:req.body.author,
        PublishYear:req.body.PublishYear  
    });

   
   try {
    const book =  await newBook.save();
    return res.status(201).json(data);
   } catch (error) {
        return res.status(400).json({message: error.message});
   }

    
};

export const bookdetail = async(req,res)=>{
    try {
        const book = await Book.findById(req.params.id);

       if (book == null) {
        return res.status(404).json({message:"Cannot find book"});
       }
       else{
        res.json(book);
       }
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}

export const bookupdating = async(req,res) => {
    
    try {
        const result = await Book.findOneAndUpdate(
            {id:req.params.id},
            {
                id:req.body.id,
                title:req.body.title,
                author: req.body.author,
                PublishYear: req.body.PublishYear,
            },
            {
                new: true,
            }
    );
        res.status(200).json({result});
    } catch (error) {
        res.status(400).json({message:error.message});
    }
};

export const bookdeleting = async(req,res) => {
   const bookdelete =  req.params.id;
   try {
    const delbook  =  await Book.deleteOne({id:bookdelete});
    res.json({message:'Book is deleted'});

   } catch (error) {
    res.status(500).json({message:error.message});
   }
};




export const getdatas = async(req,res)=>{
    //res.json(data);
    try {
        const Books = await Book.find();
        res.json(data)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
    // try {
    //     const Books = await Book.find();
    //     res.json(Books)
    // } catch (error) {
    //     res.status(500).json({message: error.message});
    // }
};
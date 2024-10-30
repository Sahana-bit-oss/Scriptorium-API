import login from "../models/schema.login.js";

export const logindatas = async(req,res) =>{
    try{
        const Login = await login.find(); 
        res.json(Login)
    } catch (error) {
        res.status(500).json({message: error.message});
    }  
};

export default routers;
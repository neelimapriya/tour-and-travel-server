import { Request, Response } from "express";
import User from "./user.model";
import { userService } from "./user.service";

const createUser=async(req:Request, res:Response)=>{
try{
    const payload=req.body
const result=await userService.createUser(payload)
console.log(result)
res.json({
    message:"user created successfully",
    data:result
})
}catch(err){
    res.json({
        status:false,
        message:"something wrong"
    })
}
}


export const userController={
    createUser
}
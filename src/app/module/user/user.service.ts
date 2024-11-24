import { Request, Response } from "express";
import User from "./user.model";
import { IUser } from "./user.interface";

const createUser=async(payload:IUser):Promise<IUser>=>{
const result=await User.create(payload)
return result
}

export const userService={
    createUser
}
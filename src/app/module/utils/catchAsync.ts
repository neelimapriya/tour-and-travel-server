import { userService } from "../user/user.service"

const catchAsync=(func)=>{
return (req, res, next)=>{
    try{

    }catch(err){
        next(err)
    }
}
}

catchAsync(async(req,res,next)=>{
    try{
        const result =await userService.getUser()
    }catch(err){
        next(err)
    }
})

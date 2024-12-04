import { Response } from "express"

type TSuccessResponse<T>={
status?:boolean,
message:string,
data:T | T[]|null,
statusCode:number
}

const sendResponse=<T>(res:Response,data:TSuccessResponse<T>)=>{
    res.json({
        status:true,
        message:data.message,
        data:data.data,
        statusCode:data.statusCode
    })
}
export default sendResponse
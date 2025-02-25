import { Response } from "express"


type TSuccessResponse<T>={
    status?:boolean
    statusCode:number
    message:string
    data : T | T[] | null
    token?: string
}

const sendResponse = <T>(res:Response,data:TSuccessResponse<T>)=>{
    res.status(data.statusCode).json({
        status:true,
        statusCode:data.statusCode,
        message:data.message, 
        data:data.data,
        token:data.token
    }
    )
}

export default sendResponse
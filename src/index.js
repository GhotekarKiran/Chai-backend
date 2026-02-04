
// require(`dotenv`).config({path:'./env'})

import dotenv from "dotenv"
import ConnectDB from "./db/index.js";
// import mongoose from "mongoose"
// import {DB_NAME} from "./constants"

import express from "express"
const app = express();
  

dotenv.config({
    path: './.env'
})

ConnectDB();


/*
;(async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("Error");
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`app is listening on Port${process.env.PORT}`)
        })

    }catch(error){ 
        console.log("Error :",error)
        throw error 
    }
})()

*/
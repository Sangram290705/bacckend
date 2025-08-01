import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { application } from "express";

dotenv.config({
    path : './env'
})

connectDB()
.then(()=>{
    application.listen(process.env.PORT || 8000,()=>{
        console.log(`server is running at port ${process.env.PORT}`)})
})
.catch((err)=>{
    console.log("mongo db connection failed ",err);
})
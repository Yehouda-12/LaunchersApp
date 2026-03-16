import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose"

dotenv.config()

const app = express()

const PORT = process.env.PORT || 5000

app.use(cors())


mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("connected ton MongoDb"))
.catch((err)=>console.error("error connection :",err))


app.listen(PORT,()=>{
    console.log(`Server run in https://localhost:${PORT}`)
})
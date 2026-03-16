import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose"
import launcherRoute from "./routes/launcherRoutes.js"

dotenv.config()

const app = express()

const PORT = process.env.PORT || 5000
app.use(express.json())

app.use(cors())
app.use('/api/launchers',launcherRoute)



mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("connected ton MongoDb"))
.catch((err)=>console.error("error connection :",err))


app.listen(PORT,()=>{
    console.log(`Server run in https://localhost:${PORT}`)
})
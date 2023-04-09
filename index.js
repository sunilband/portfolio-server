const express=require("express")
require('dotenv').config()
const server=express()
const mongoose=require("mongoose")
const cors=require("cors")
const port=process.env.PORT || 8000
const routes=require("./routes/TaskRoute")
// middlewares
server.use(express.json())
server.use(cors())
server.use("/",routes)


// connect mongo
mongoose.connect(process.env.MONGO_URI)
.then(()=>{console.log("mongodb connected")})
.catch((err)=>{console.log(err)})


server.listen(port,()=>{
    console.log(process.env.port)
    console.log(`server is running at ${port}`)
})
const express = require("express")
const { serverConnect } = require("./db")
const { noticeRouter } = require("./backend/routes/notice.route")
const app = express()
const cors = require("cors")

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.json("Welcome to Trello Board")
})
app.use("/notices",noticeRouter)


app.listen(8000,async()=>{
    try{
     await serverConnect
     console.log("server is connected and running fine")

    }catch(error){
        console.log(error)
    }
})
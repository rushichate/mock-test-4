const express = require("express")
const { NoticeModel } = require("../models/notice.model")
const noticeRouter = express.Router()

noticeRouter.get("/",async(req,res)=>{
    try{
        const notices = await NoticeModel.find()
        res.status(200).json(notices)

    }catch(error){
        res.status(400).json({message:error})
    }
})

noticeRouter.post("/",async(req,res)=>{
    const {author,title,notice} = req.body
    try{
        const newNotice = new NoticeModel({author,title,notice})
        await newNotice.save()
        res.status(200).json({message:"NOtice Posted Successfully"})

    }catch(error){
        res.status(400).json({message:error})
    }
})

noticeRouter.put("/:id",async(req,res)=>{
    const {id} = req.params
    try{
        await NoticeModel.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json({message:"Notice Updated Successfully"})
    }catch(error){
        res.status(400).json({message:error})
    }
})

noticeRouter.delete("/:id",async(req,res)=>{
    const {id} = req.params
    try{
        await NoticeModel.findByIdAndDelete(id)
        res.status(200).json({message:"Notice Deleted Successfully"})

    }catch(error){
        res.status(400).json({message:error})
    }
})


module.exports={
    noticeRouter
}
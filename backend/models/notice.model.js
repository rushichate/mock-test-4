const mongoose = require("mongoose")

const noticeSchema = mongoose.Schema({
     author:{type:String},
     title:{type:String},
     notice:{type:String},
     date:{type:Date,default:Date.now}
},{
    versionKey:false
})

const NoticeModel = mongoose.model("notice",noticeSchema)

module.exports={
    NoticeModel
}
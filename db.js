const mongoose = require("mongoose")
require("dotenv").config

const serverConnect = mongoose.connect("mongodb+srv://rushichate8006:rushikesh@cluster0.zvech0i.mongodb.net/mock-test-4?retryWrites=true&w=majority")

module.exports={
    serverConnect
}
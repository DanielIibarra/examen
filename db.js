const mongoose = require("mongoose");

const connectDB = async()=>{
    try{
      await mongoose.connect('mongodb://daniiel101:CwwQNA3lluWXlHxrQ5EMx4tepcrL2lNb16RE004YBEPnIPfzooJD5OFg1kRrbtNnYxlUhBSGT6x3ACDbI4NAhg%3D%3D@daniiel101.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@daniiel101@')
      await console.log('Dentro de la base de datos')  
    }catch{
      console.log('error')
    }
  }
  
  module.exports = connectDB
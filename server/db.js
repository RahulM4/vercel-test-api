const mongoose = require('mongoose');
require('dotenv').config();
const mongoUri = process.env.MONGODB_URI ;

mongoose.set("strictQuery", false);
const connecttoMongo = () => {
    mongoose.connect(mongoUri, ()=> {
    console.log("Connected to MongoDB Successfully!");
   });
}


module.exports = connecttoMongo;
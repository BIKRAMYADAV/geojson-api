const mongoose = require('mongoose')

require('dotenv').config()


const connectDB = async () => {
  await mongoose.connect("mongodb+srv://admin:admin@blog-website.utuektf.mongodb.net/?retryWrites=true&w=majority").then(() => {
    console.log(`connected to database`);
   }).catch((error) => console.log(error));
}

module.exports = connectDB;
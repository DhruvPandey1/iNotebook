const mongoose = require('mongoose');
const mongoURI="mongodb://127.0.0.1:27017/inotebook?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.9.1"
const connectToMongo=()=>{mongoose.connect(mongoURI)};
module.exports=connectToMongo;

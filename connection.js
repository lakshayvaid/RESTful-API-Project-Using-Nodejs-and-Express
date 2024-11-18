const mongoose=require('mongoose');

// MongoDb Connection
async function connectMongodb(url){
   return mongoose.connect(url)
    
}

module.exports={
    connectMongodb,
}
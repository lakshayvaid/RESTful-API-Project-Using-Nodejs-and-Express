const User=require('../models/user.js');

async function handlegetallusers(req,res){
    const alldbusers=await User.find({});
return  res.json(alldbusers);
}

async function handlegetuserbyid(req,res){
 const u= await User.findById(req.params.id);
return res.json(u);
}

async function handleupdateuserbyid(req,res){
 await  User.findByIdAndUpdate(req.params.id,{lastName:"papa"});
return res.json({msg:"updated successfully"});
}

async function handledeleteuserbyid(req,res){
    await  User.findOneAndDelete(req.params.id);
res.json({msg:"deleted successfully"});
}

async function handlepostuser(req,res){
    const body=req.body;
    console.log(body);
    
    if(!body||
       !body.first_name||
       !body.last_name||
       !body.email||
       !body.gender||
       !body.job_title
    ){
       return res.status(400).json({
           msg:"All fields are required"
       })
    }
    
    //create operation in mongodb
    const result=  await User.create({
       firstName:body.first_name,
       lastName:body.last_name,
       email:body.email,
       jobTitle:body.job_title,
       gender:body.gender
    })
    console.log(result);
    
    return res.status(201).json({msg:"create operation successful"});
}

module.exports={
    handlegetallusers,
    handlegetuserbyid,
    handleupdateuserbyid,
    handledeleteuserbyid,
    handlepostuser
};

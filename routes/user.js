const express=require('express');


const {handlegetallusers,
    handlegetuserbyid,
    handleupdateuserbyid, 
    handledeleteuserbyid,
handlepostuser}=require('../controllers/user');

const router=express.Router();



router.route('/')
.get(handlegetallusers)
.post(handlepostuser);


router.route('/:id')
.get(handlegetuserbyid)
.patch(handleupdateuserbyid)
.delete(handledeleteuserbyid);



module.exports=router;
const express=require('express');
const app=express();
const {connectMongodb}=require('./connection.js');
const userRouter =require('./routes/user.js');

//middleware
app.use(express.urlencoded({extended:false}));

//connection
connectMongodb('mongodb://127.0.0.1:27017/mongo-app-1');

//routes
app.get('/',(req,res)=>{
   
    const html=`<h1> RESTful API Using Nodejs and Express  </h1>
    <ul> 
    <li> <h3> To get the list of all users in list form -> http://localhost:9000/users  </h2></li>
    <li> <h3>To Get all the users in json form ->http://localhost:9000/api/users </h2></li>
    <li> <h3>To Get any specific user in json form -> http://localhost:9000/api/users/id </h2></li>
    <li> <h3> For Post Request - Add new user -> http://localhost:9000/api/users </h2></li>
    <li> <h3> For Patch Request - To update an existing user -> http://localhost:9000/api/users/id </h2></li>
    <li> <h3> For Delete Request - To delete a user -> http://localhost:9000api/users/id </h2></li>
</ul>
    `
    res.send(html);
})
app.use("/user",userRouter);



app.listen(9000,()=>{console.log("server started");})
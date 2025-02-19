



const express=require("express");
const route=express.Router();

const UserController=require("../Controllers/UserControllers")

route.post('/usersignup', UserController.UserSignUp)
route.post('/userlogin', UserController.UserLogin)
route.get('/userprofile', UserController.UserProfile)


module.exports=route
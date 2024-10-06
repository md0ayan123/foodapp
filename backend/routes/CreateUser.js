const express=require('express')
const router =express.Router()
var fetchuser=require("../middleware/Fetchuser")
const User = require('../models/User')
const { body, validationResult } = require('express-validator');
const bycrypt =require("bcryptjs")
const jwt =require('jsonwebtoken')
const jwtSecret="H@rryisagoodboy"


router.get('/fetchall',fetchuser,async(req,res)=>{
  // let user=req.body.user
  try {
    const user= await User.find({user})
      res.json(notes)

  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error")
  }
  })   


router.post("/createuser", [
    body('name','Enter a valid name').isLength({min:3}),
    body('email','Enter a valid email ').isEmail(),
    body('password','Password must be atleast 5 characters ').isLength({min:5}),
 ],async(req,res)=>{
    let success=false
     // If there is an error, return Bad request and errors
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
     return res.status(400).json({success,errors:errors.array()});
   }
   const salt = await bycrypt.genSalt(10);
   let secpass= await bycrypt.hash(req.body.password,salt)
    try {
       await User.create({
            name:req.body.name,
            email:req.body.email,
            password:secpass,
            location:req.body.location  
        })
        res.json({success:true})
      
    } catch (error) {
        console.log(error);
        res.json({success:false})
        
    }

})




router.post("/getuser", [
 
  body('email','Enter a valid email ').isEmail(),
  body('password','Password must be atleast 5 characters ').isLength({min:5}),
],async(req,res)=>{
  let success=false
  const errors = validationResult(req);
   if (!errors.isEmpty()) {
     return res.status(400).json({success,errors:errors.array()});
   }  
    
   let email=req.body.email
    try {
     let userData=  await User.findOne({email})
     if(!userData){
      return res.status(400).json({error:"Please enter correct credentials"});
     }
     const passwordCompare=await bycrypt.compare(req.body.password,userData.password)
     
     if(!passwordCompare){
      return res.status(400).json({error:"Please enter correct credentials"});
     }
     const data={
      user:{
      id:userData.id
      }
     }
     const authToken=jwt.sign(data,jwtSecret)
     return res.json({success:true,authToken:authToken})    
      
    } catch (error) {
        console.log(error);
        res.json({success:false})
        
    }

})
module.exports=router;
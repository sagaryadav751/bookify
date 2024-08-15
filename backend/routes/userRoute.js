let express = require('express')
let router = express.Router()
let user = require("../models/users")
// const bcrypt = require('bcrypt')
// const saltRounds = 10
// const jwt = require('jsonwebtoken')
// const jwtsecret= "99997777ggvv66n"


router.get("/user-details",async(req,res,next)=>{
   try{
        const data = await user.find({})
        res.status(201).send({
            success:true,
            message:"Data fetch Successculy",
            data,
        })
   }catch(error){
    console.log(error)
   }
})

module.exports=router


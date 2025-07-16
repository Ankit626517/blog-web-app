const express = require('express')
const router =  express.Router();
const {register} = require("../Controller/auth-controller")

router.get("/" , (req , res)=>{
    res.send("Welcome to routes worlds  with 9000 port")

} )



// router.route("/register").get((req,res)=>{
// res.send("hii i ma register page ")
// })
 router.route("/register").get(register)

module.exports = router; 


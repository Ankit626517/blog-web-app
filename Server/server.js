const express = require("express")
const router = require("./Routes/auth-router")
require('dotenv').config()

const app = express()


app.use(router)
const PORT = process.env.PORT || 9000



app.listen( PORT ,()=>{
    console.log(`server is runnig port ${PORT}`)
}  )
require("dotenv").config();
const express = require("express");
const router = require("./Routes/auth-router");
const {  mongoose } = require("mongoose");
const  connectDb  = require("./utils/db");


const app = express();

app.use(router);
const PORT = process.env.PORT || 9000;

// connectDb().then(()=>{
//     console.log("hadifhsofishf")
// })

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is runnig  ${PORT}`);
  });
});


//  app.listen(PORT, () => {
//     console.log(`server is runnig  ${PORT}`);
//   });

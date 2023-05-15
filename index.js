const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use(express.json());

require("./config/database").
connect();

//route import and mount
const users = require("./routes/user");

app.use("api/v1",users);
 
//server start
app.listen(PORT,()=>{
  console.log(`app is listening at port no ${PORT}`);
});
 
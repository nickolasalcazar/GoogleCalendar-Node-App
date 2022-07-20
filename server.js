const express = require("express");	// Includes Express
const app = express();			// Creates an Express app

require('dotenv').config();
// console.log(process.env.SUPERSECRET);  // How to access config variables


// The two lines above can be shortened to:
// const app = require("express")();
app.listen(3000);

app.get("/", (req, res) => {
  console.log("Hello!");
  res.send("Hello port 3000!");
  // res.send(​​JSON.stringify(payload));	// Example
});



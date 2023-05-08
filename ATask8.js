const http = require("http");

const express = require('express');

const app = express();

app.use((req,res,next)=>{
  console.log('In the middleware');
  next();// Allow the reuest to continue to the next middleware in line
});
app.use((req,res,next)=>{
  console.log('In another middleware');
  res.send('<h1>Hellow form Express</h1>')
});

// const routes = require("./routes");

// Rounting request

const server = http.createServer(app);

server.listen(3200, () => {
  console.log("Server is Running");
});
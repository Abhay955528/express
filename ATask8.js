const http = require("http");
const bodyParser = require('body-parser');

const express = require('express');

const app = express();

app.use(bodyParser.urlencoded({extenden: false}));

app.use('/add-product',(req,res,next)=>{
  res.send('<form action="/product" method="POST"><input type="text" name="tittle"><button type="submit">Add Product</button></form>')
});

app.post('/product',(req,res,next)=>{
 console.log(req.body);
  res.redirect('/');
})

app.use('/',(req,res,next)=>{
  res.send('<h1>Hellow form Express</h1>')
});

// const routes = require("./routes");

// Rounting request

const server = http.createServer(app);

server.listen(3200, () => {
  console.log("Server is Running");
});
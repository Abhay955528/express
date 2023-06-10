const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./controllers/error");
const sequelize = require("./util/database");

const User = require("./models/user");
const Expense = require("./models/expense")
const cors = require("cors");

const app = express();
app.use(cors());

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const userRoutes = require('./routes/user')

app.use(bodyParser.json({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use('/user',userRoutes)


app.post('/expense/add-spend',async(req,res,enxt)=>{
  const amount = req.body.amount;
  const descripition = req.body.descripition;
  const category = req.body.category;
  
  const uId = Expense.create({
    amount:amount,
    descripiton:descripition,
    category:category
  })
  res.status(200).json({newExpense:uId})
})

app.get('expense/get-spend',async(req,res,next)=>{
const expense = await Expense.findAll();
res.status(201).json({allExpense:expense});
})

app.use(errorController.get404);

sequelize
  .sync()
  .then((result) => {
    // console.log(result);
    app.listen(3000, () => {
      console.log("Running the Server With Sequelize");
    });
  })
  .catch((error) => {
    console.log(error);
  });

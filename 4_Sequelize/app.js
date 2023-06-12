const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./controllers/error");
const sequelize = require("./util/database");

const Product = require("./models/product");
const User = require("./models/user");
const Expense = require("./models/expense");
const cors = require("cors");
const app = express();
app.use(cors());

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const userRoutes = require("./routes/user");
const userExpense = require("./routes/expense");

app.use(bodyParser.json({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use("/user", userRoutes);
app.use("/expense", userExpense);

app.use(errorController.get404);

sequelize
  .sync()
  .then((user) => {
    app.listen(3000, () => {
      console.log("Running the Server With Sequelize");
    })
  })
  .catch((error) => {
    console.log(error);
  });

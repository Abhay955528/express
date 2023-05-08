const http = require("http");
const bodyParser = require("body-parser");

const express = require("express");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extenden: false }));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

// const routes = require("./routes");

// Rounting request

// app.use((req, res, next) => {
//   res.status(404).send("<h1>Page is not found</h1>");
// });

// const server = http.createServer(app);

app.listen(3200, () => {
  console.log("Server is Running");
});

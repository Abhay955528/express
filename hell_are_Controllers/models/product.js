const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json"
);

const getProductFromfile = (cb) => {
  fs.readFile(p, (err, fileContect) => {
    if (err) {
      return cb([]);
    } else {
      cb(JSON.parse(fileContect));
    }
  });
};

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    getProductFromfile(products=>{
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }
  static fecthAll(cb) {
    getProductFromfile(cb);
  }
};

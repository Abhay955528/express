const fs = require("fs");
const path = require("path");

module.exports = class Product {
  constructor(t) {
    this.tittle = t;
  }

  save() {
    const p = path.join(
      path.dirname(process.mainModule.filename),
      "data",
      "products.json"
    );
    fs.readFile(p, (err, fileContect) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileContect);
      }
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }
  static fecthAll(cb) {
    const p = path.join(
      path.dirname(process.mainModule.filename),
      "data",
      "products.json"
    );
    fs.readFile(p,(err,fileContect)=>{
      if(err) {
        cb([]);
      }

      cb(JSON.parse(fileContect));
    })
  }
};

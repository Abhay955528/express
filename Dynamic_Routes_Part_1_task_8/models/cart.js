const path = require('path');
const fs = require('fs');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
  );

  
module.exports = class Cart {
   static addProduct(id,prodyctPrice) {
    // Fecth the previous cart
    fs.readFile(p,(err,fileContent)=>{
        let cart = {products:[],totalPrice:0};
        if(!err){
            cart = JSON.parse(fileContent);
        }
        const existingProductIndex = cart.products.findIndex(prod=> prod.id===id);
        const existingProduct = cart.products[existingProductIndex];
        let updatedProduct;
        if(existingProduct) {
            updatedProduct={...existingProduct};
            updatedProduct.qty = updatedProduct.gty+1;
            cart.products = [...cart.products];
            cart.products[existingProductIndex]= updatedProduct;
        }
        else{
            updatedProduct = {id:id,gty:1};
            cart.products =  [...cart.products,updatedProduct]
        }
        cart.totalPrice = cart.totalPrice+prodyctPrice;
        fs.writeFile(p,JSON.stringify(cart),err=>{
            console.log(err);
        })
    });

    // Anslyze the cart => Find existing product
    // add new product/ increase quantity
   }
};
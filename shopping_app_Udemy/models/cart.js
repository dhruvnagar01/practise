const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
  );

module.exports = class Cart {
    static addProduct(id, productPrice) {
        //fetch all prev cart
        fs.readFile(p, (err, fileContent) => {
            let cart = {products: [], totalPrice: 0};

            if (!err) {
                try {
                  // Parse the existing cart data
                  cart = JSON.parse(fileContent);
                } catch (parseError) {
                  console.error('Error parsing cart file:', parseError);
                  return;
                }
              }
            // analyse cart=>find existing product
            const existingProductIndex = cart.products.findIndex(prod => prod.id === id);
            const existingProduct = cart.products[existingProductIndex];
            let updateProduct;
            console.log("SETP 1");
            //add new product/ increase quantity
            if(existingProduct) {
                updateProduct = {...existingProduct};
                updateProduct.qty = updateProduct.qty +1;
                cart.products = [...cart.products];
                cart.products[existingProductIndex] = updateProduct;
            }
            else {
                    updateProduct = { id: id, qty: 1};
                    cart.products = [...cart.products, updateProduct];
            }

            cart.totalPrice = cart.totalPrice + productPrice;
            fs.writeFile(p, JSON.stringify(cart), err => {
                if (err) {
                    console.error('Error writing cart file:', writeErr);
                  } else {
                    console.log('Cart updated successfully.');
                  }
                    });
            });
    }

    static deleteProduct(id, productPrice) {
      fs.readFile(p, (err, fileContent) => {
          if(err) {
              return;
          }
          const updatedCart = {...JSON.parse(fileContent)};
          const productIndexx = updatedCart.products.findIndex(prod => prod.id===id);
          const productQty = product.qty;
          updatedCart.products = updatedCart.products.filter(prod => prod.id !== id );
        
          updatedCart.totalPrice = updatedCart.totalPrice - productPrice * productQty;
          fs.writeFile(p, JSON.stringify(updatedCart), err => {
            if (err) {
                console.error('Error writing cart file:', writeErr);
              } else {
                console.log('Cart updated successfully.');
              }
                });
      })
    };
};
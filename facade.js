const ShoppingCart = function(item) {
  this.item = item;
};

ShoppingCart.prototype.addItem = function() {
  console.log(`added ${this.item} to shopping cart.`);
};

ShoppingCart.prototype.removeFromInventory = function() {
  console.log(`removing item ${this.item} from inventory`);
};

ShoppingCart.prototype.bringToCashier = function() {
  console.log(`${this.item} brought to cashier`);
};

ShoppingCart.prototype.submitPayment = function() {
  console.log(`payment submitted for ${this.item}`);
};

const ShoppingCartFacade = function(cart) {
  this.cart = cart;
};

ShoppingCartFacade.prototype.addToCart = function() {
  this.cart.addItem();
  this.cart.removeFromInventory();
};

ShoppingCartFacade.prototype.checkout = function() {
  this.cart.bringToCashier();
  this.cart.submitPayment();
};

const myShoppingCart = new ShoppingCart('CHEESE');

const myShoppingCartFacade = new ShoppingCartFacade(myShoppingCart);
myShoppingCartFacade.addToCart();
myShoppingCartFacade.checkout();

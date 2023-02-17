class ShoppingCart {
  constructor() {
    this.cart = [];
  }
  addingItems(item) {
    let myitem = item.toLowerCase();
    if (!this.cart.includes(myitem)) {
      this.cart.push(myitem);
    } else console.log(`${myitem} item is already present in cart`);
  }

  showCart() {
    return this.cart;
  }
  removingItems(item) {
    let myitem = item.toLowerCase();
    if (this.cart.includes(myitem)) {
      let indexofitem = this.cart.indexOf(myitem);
      this.cart.splice(indexofitem, 1);
      console.log(`this is cart after removing(${myitem}) :  ${this.cart}`);
    } else console.log(` ${myitem} is not present in cart`);
  }
}

const cartobj = new ShoppingCart();
cartobj.addingItems("Shirt");
cartobj.addingItems("jeans");
cartobj.addingItems("handBag");
cartobj.addingItems("shoes");
console.log("this is cart items : " + cartobj.showCart());
cartobj.removingItems("shoes");

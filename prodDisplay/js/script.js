// SITE JS SCRIPT FOR COMMERCE WIDGET

var storeApp = new Vue({
  el: '#storeApp',
  data: {
    items: products,
    cart: [],
    cartTotal: 0,
    dispFlag: false,
  },
  methods: {
    displayStock: function () {
      if (!this.dispFlag) {
        this.items = products.filter(i => i.inStock)
        this.dispFlag = true;
        document.getElementById("stock").style.backgroundColor = "rgb(99,93,110)";
      }else {
        this.items = products;
        this.dispFlag = false;
        document.getElementById("stock").style.backgroundColor = "rgb(49,43,60)"
      }
    },
    sortAsc: function () {

      if (!this.dispFlag) {
        this.items = products.sort(function(a,b) {return a.price - b.price})
        document.getElementById("priceLow").style.backgroundColor = "rgb(99,93,110)";
        this.dispFlag = true;
      }else {
        document.getElementbById("priceLow").style.backgroundColor = "rgb(49,43,60)";
        this.dispFlag = false;
      }
    },
    sortDesc: function () {
      this.items = products.sort((a,b) => {return b.price - a.price})
    },
    addToCart: function (addItemId, itemPrice) {

      let price = itemPrice.toFixed(2);

      newPrice = parseFloat(price);

      this.cart.push(addItemId)
      this.cartTotal = this.cartTotal + newPrice;


    },
    removeFromCart: function (removeItemId, itemPrice) {
      let price = itemPrice.toFixed(2);
      newPrice = parseFloat(price);

      if (this.cart.includes(removeItemId)) {
        let x = this.cart.indexOf(removeItemId);
        this.cart.splice(x,1);
        this.cartTotal = this.cartTotal - newPrice;
      }else {
        return;
      }
    }
  },


})

// SITE COMPONENTS FOR COMMERCE WIDGET
Vue.component('product', {
  props: ['prod'],
  data: function () {
    return {

    }
  },
  template:
    `<div class="prod-container">
      <img v-bind:src=prod.image v-bind:alt=prod.name class="prod-image">
      <span><button class="prod-button" v-on:click="callCart">Add to cart</button></span>
      <span><button class="prod-button" v-on:click="removeCart">Remove</button></span>
      <span>{{prod.priceDisp}}</span>
      <p v-show="prod.onSale">On Sale!</p>
      <span>{{prod.description}}</span>
    </div>
    `,
  methods: {
    callCart: function () {
      this.$emit("add-to-cart");
    },
    removeCart: function () {
      this.$emit("remove-from-cart");
    }
  }
})

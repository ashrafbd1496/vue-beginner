const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: "Socks",
      image: "./assets/images/socks_blue.jpg",
      inStock: false,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        { id: 2234, color: "green", image: "./assets/images/socks_green.jpg" },
        { id: 2235, color: "#344257", image: "./assets/images/socks_blue.jpg" },
      ],
      showButton: false,
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    // solution
    removeFromCart() {
      if (this.cart >= 1) {
        this.cart -= 1;
      }
    },
    // solution
    updateImage(variantImage) {
      this.image = variantImage;
    },
  },
});

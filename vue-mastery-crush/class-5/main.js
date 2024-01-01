const app = Vue.createApp({
  data() {
    return {
      productTitle: "Socks",
      image: "./assets/images/socks_green.jpg",
      Url: "https://www.ashrafbd.com",
      //inStock: true,
      inventory: 0,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        { id: 334, color: "green" },
        { id: 452, color: "blue" },
      ],
    };
  },
});
 
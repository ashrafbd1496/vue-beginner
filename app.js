var app = Vue.createApp({
  data() {
    return {
      count: 0,
    };
  },

  methods: {
    getCurrentTime() {
      let ct = new Date();
      return new Date();
    },

    increase(evt, amount) {
      this.count = this.count + amount;
      console.log(evt);
    },
    decrease(amount) {
      this.count = this.count - amount;
    },

    //catch or get event in vue
    catchEvent(ev) {
      console.log(ev);
    },
  },
});
app.mount("#app");

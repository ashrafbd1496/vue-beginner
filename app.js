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

    increase() {
      this.count++;
    },
    decrease() {
      this.count--;
    },
  },
});
app.mount("#app");

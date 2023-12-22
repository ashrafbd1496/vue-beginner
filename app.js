const { createApp, ref } = Vue;

createApp({
  setup() {
    const msg = ref("Hello vue!");
    return {
      msg,
    };
  },
}).mount("#app");

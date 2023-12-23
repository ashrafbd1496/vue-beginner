const { createApp, ref } = Vue;

createApp({
  setup() {
    const myInfo = ref({
      name: "Ashrf Uddin",
      gituhubLink: "https://github.com/ashrafbd1496/vue-beginner",
      rawHmtl: '<a href="https://github.com/ashrafbd1496/vue-beginner"></a>',
    });

    return {
      myInfo,
    };
  },
}).mount("#app");

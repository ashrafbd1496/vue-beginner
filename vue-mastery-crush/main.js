const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      description:
        "A sock is a piece of clothing worn on the feet and often covering the ankle or some part of the calf. Some types of shoes or boots are typically worn over socks. In ancient times,",
      imageUrl: "/assets/images/socks_green.jpg",
      imageLoaded: true,
    };
  },
});
const mountedApp = app.mount("#app");

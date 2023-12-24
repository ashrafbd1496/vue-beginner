const { createApp, ref } = Vue;

const app = createApp({
  setup() {
    const heading = ref("Shopping List");
    const items = [
      { name: "Meat & Fish", price: 500.0 },
      { name: "Oil & Fat", price: 200.0 },
      { name: "Dairy & Eggs", price: 120.0 },
    ];
    const newItem = ref("");

    return {
      heading,
      items,
      newItem,
      addItem() {
        items.push({
          name: newItem.value,
          price: 0.0,
        });
        newItem.value = "";
      },
    }; //end return
  }, //end Setup
}); //end create app

app.mount("#app");

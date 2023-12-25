const { createApp, ref, computed } = Vue; // Removed unused watchEffect

const app = createApp({
  setup() {
    const heading = ref("Shopping List");
    const items = ref([
      { name: "Meat & Fish", price: 500.0 },
      { name: "Oil & Fat", price: 200.0 },
      { name: "Dairy & Eggs", price: 120.0 },
    ]);

    const newItem = ref("");

    const total = computed(() => {
      return items.value.reduce((acc, item) => acc + item.price, 0);
    });

    return {
      heading,
      items,
      newItem,
      total,

      addItem() {
        items.value.push({
          name: newItem.value,
          price: 0.0,
        });
        newItem.value = "";
      },
      removeItem(index) {
        this.items.splice(index, 1);
      },

      updatePrice(index, newPrice) {
        // Add a method to update item prices
        items.value[index].price = newPrice;
      },
    };
  },
});

app.mount("#app");

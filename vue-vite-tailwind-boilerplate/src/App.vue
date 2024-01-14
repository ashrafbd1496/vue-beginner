<script setup>
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/logo.png" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vue Vite Tailwind Boilerplate" />
</template>

<style scoped>
.logo {
  width: 50rem;
  height: auto;
  padding: 1.5em;
  padding-bottom: 0;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

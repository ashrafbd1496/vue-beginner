<template>
  <div v-for="submission in submissions" :key="submission.id">
    <div>
      <a href="#" target="_blank">
        <img
          src="/src/assets/img/upvote.png"
          class="mx-auto logo"
          alt="Vite logo"
        />
      </a>
      <h2>Upvote</h2>
    </div>
    <div class="p-10">
      <!--Card 1-->
      <div
        class="flex w-full lg:max-w-full lg:flex border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r"
      >
        <div
          class="w-1/4 h-48 lg:h-auto lg:w-48 bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          style="background-image: url('/src/assets/img/beach.jpg')"
          title="Mountain"
        ></div>
        <div
          class="w-1/2 p-4 flex flex-col text-left justify-between leading-normal"
        >
          <div class="mb-8">
            <div class="text-gray-900 font-bold text-xl mb-2">
              {{ submission.title }}
            </div>
            <p class="text-gray-700 text-base">
              {{ submission.description }}
            </p>
          </div>
          <div class="flex items-center">
            <img
              class="w-10 h-10 rounded-full mr-4"
              :src="require(submission.submissionImage)"
              alt="Avatar of Writer"
            />
            <div class="text-sm">
              <p class="text-gray-900 leading-none">
                {{ submission.voter }}
              </p>
              <p class="text-gray-600">Aug 18</p>
            </div>
          </div>
        </div>
        <div class="w-1/4 vote-icon flex">
          <div class="text-2xl font-bold flex items-center justify-center">
            <button class="p-2 border-gray-500 rounded-full hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </button>

            <div class="upvote-number">{{ submission.votes }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>
<script setup>
//import HelloWorld from './components/HelloWorld.vue'
import { ref, onMounted } from "vue";

const submissions = ref([
  {
    id: 1,
    title: "Cox's bazar beach",
    description: "World Most Popular Beach",
    url: "#",
    votes: 16,
    avatar: "/src/assets/img/avatar.jpg",
    submissionImage: "/src/assets/img/beach.jpg",
    voterName: "Daniel",
  },
  onMounted(() => {
    console.log(submissions);
  }),
  // ... other submissions
]);
</script>

<style scoped>
.logo {
  height: 6em;
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

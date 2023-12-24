<script setup>
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div>
    <div class="md:container mx-auto py-4 bg-[#000000]">
      <p class="text-white text-center text-2xl">
        Crud application with vue js and php, mysql
      </p>
    </div>
  </div>

  <div>
    <div class="md:container mx-auto py-4 border-spacing-y-7">
      <button
        class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        List of user
      </button>

      <button
        class="float-right bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Add user
      </button>
    </div>

    <div class="md:container mx-auto py-2" role="alert">
      <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
        Error:
      </div>
    </div>
    <div class="md:container mx-auto py-2" role="alert">
      <div class="bg-teal-500 text-white font-bold rounded-t px-4 py-2">
        Success:
      </div>
    </div>
  </div>

  <div>
    <div class="md:container mx-auto">
      <table class="items-center w-full">
        <thead>
          <tr>
            <th class="border border-gray-400 px-4 py-2 text-gray-800">Id</th>
            <th class="border border-gray-400 px-4 py-2 text-gray-800">Name</th>
            <th class="border border-gray-400 px-4 py-2 text-gray-800">
              Email
            </th>
            <th class="border border-gray-400 px-4 py-2 text-gray-800">
              Phone
            </th>
            <th class="border border-gray-400 px-4 py-2 text-gray-800">Edit</th>
            <th class="border border-gray-400 px-4 py-2 text-gray-800">
              Delete
            </th>
          </tr>
        </thead>
        <tbody class="text-center">
          <tr>
            <th class="border border-gray-400 px-4 py-2 text-gray-800">1</th>
            <td class="border border-gray-400 px-4 py-2 text-gray-800">Mark</td>
            <td class="border border-gray-400 px-4 py-2 text-gray-800">
              Otto@gmail.com
            </td>
            <td class="border border-gray-400 px-4 py-2 text-gray-800">
              +99 45845865
            </td>
            <td class="border border-gray-400 px-4 py-2 text-gray-800">
              <a href=""
                ><img id="edit" src="http://localhost/vue/assets/img/edit.png"
              /></a>
            </td>
            <td class="border border-gray-400 px-4 py-2 text-gray-800">
              <a href=""
                ><img
                  id="delete"
                  src="http://localhost/vue/assets/img/delete.png"
              /></a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
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

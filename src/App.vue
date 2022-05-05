<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import {ref} from "vue";
import card from './components/card.vue'

const darkMode = ref(false);
  props: ['darkMode'];


</script>

<template>
  <div :class="{ 'bg-black': darkMode }">
    <h1 class="pt-20 text-center text-4xl uppercase">Foothills church</h1>
    <h2 class="text-center text-2xl uppercase pb-10">Request Within</h2>
    <div class="max-w-6xl mx-auto">
      <hr>
      <div class="grid grid-cols-12 gap-4 ">
        <card/>
      </div>
    </div>

    <div class="mx-auto text-center py-12">
      <button
          @click="darkMode = !darkMode"
          class="mb-20 uppercase md:inline-block rounded-md py-3 px-6 transition duration-300"
          :class="{ 'bg-gray-dark hover:bg-gray-darkest text-white': !darkMode, 'bg-gray-light hover:bg-gray-lightest text-black': darkMode }">
        <span v-if="darkMode">Enable Light Mode</span>
        <span v-else>Enable Dark Mode</span>
      </button>
    </div>
  </div>
</template>

<style>

</style>

<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import {ref, defineProps} from "vue";
import card from './components/card.vue'

const darkMode = ref(false);

</script>

<template>
  <div :class="{ 'bg-black': darkMode }">
    <h1 class="pt-20 text-center text-4xl uppercase" :class="{ 'text-white': darkMode }">Foothills church</h1>
    <h2 class="text-center text-2xl uppercase pb-10" :class="{ 'text-white': darkMode }">Request Within</h2>
    <div class="max-w-6xl mx-auto">
      <hr :class="{ 'text-white': darkMode }">
      <div class="grid grid-cols-12 gap-4 ">
        <card/>
      </div>
    </div>
  </div>
</template>


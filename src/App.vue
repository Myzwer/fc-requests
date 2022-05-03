<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import card from './components/card.vue'

</script>

<template>
  <h1 class="text-center text-4xl uppercase">Foothills church</h1>
  <h2 class="text-center text-2xl uppercase pb-10">Request Within</h2>
  <div class="max-w-6xl mx-auto">
    <hr>
    <div class="grid grid-cols-12 gap-4 ">
      <card />
    </div>
  </div>


</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <Nav />

  <div class="home">
    <img alt="Vue logo" src="/assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <input v-model="params.name" type="text" placeholder="Enter your name" />
  </div>
</template>

<script lang="ts">
import Component from "@/app/views/Home/Home";
const components = new Component();
export default components.vue();
</script>

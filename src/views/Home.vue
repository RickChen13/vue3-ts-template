<template>
  <Nav />
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import Component from "@/bll/views/Home";
const components = new Component();
export default components.vue();
</script>

<template>
  <Nav />

  <div class="home">
    <img alt="Vue logo" src="/assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <el-input
      v-model="params.name"
      type="text"
      placeholder="Enter your name"
      style="width: 200px"
    />
    <br />
    <br />
    <div><h2>EventBus Demo</h2></div>
    <EventBus />
  </div>
</template>

<script lang="ts">
import Component from "./Home";
const components = new Component();
export default components.vue();
</script>

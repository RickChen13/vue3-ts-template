<template>
  <div class="hello">
    <h1>Hello {{ params.name }}</h1>
    <h2>{{ msg }}</h2>
  </div>
</template>

<script lang="ts">
import Components from "@/app/components/HelloWorld/HelloWorld";
const components = new Components();
export default components.vue();
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/app/components/HelloWorld/HelloWorld.scss";
</style>

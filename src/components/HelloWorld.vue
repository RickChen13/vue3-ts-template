<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import Components from "@/bll/components/HelloWorld";
const components = new Components();
export default components.vue();
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/style/components/HlloWorld.scss";
</style>

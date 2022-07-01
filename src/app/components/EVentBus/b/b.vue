<template>
  <div>
    {{ str }}
  </div>
</template>

<script lang="ts">
import Component from "./b";
const components = new Component();
export default components.vue();
</script>

<style lang="scss" scoped>
@import "./b.scss";
</style>
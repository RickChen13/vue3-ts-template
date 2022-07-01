<template>
  <A />
  <br />
  <B />
</template>

<script lang="ts">
import Component from "./EVentBus";
const components = new Component();
export default components.vue();
</script>

<style lang="scss" scoped>
@import "./EVentBus.scss";
</style>
<template>
  <div>
    <el-button @click="emitANumber()">Emit A Component Number</el-button>
  </div>
</template>

<script lang="ts">
import Component from "./a";
const components = new Component();
export default components.vue();
</script>

<style lang="scss" scoped>
@import "./a.scss";
</style>
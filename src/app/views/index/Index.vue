<template>
  <el-text class="mx-1" size="large">vue3-ts-template</el-text>
</template>

<script lang="ts">
import Component from "@/app/views/index/Index";
const components = new Component();
export default components.vue();
</script>

<style lang="scss" scoped>
@import "@/app/views/index/Index.scss";
</style>

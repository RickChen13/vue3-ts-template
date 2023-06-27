<template>
  <el-text class="mx-1" size="large">vue3-ts-template</el-text>
  <router-link to="/starport">
    <Starport port="my-id" keep-alive style="height: 600px">
      <StarportTest />
    </Starport>
  </router-link>
</template>

<script lang="ts">
import Component from "@/app/views/index/Index";
const components = new Component();
export default components.vue();
</script>

<style lang="scss" scoped>
@import "@/app/views/index/Index.scss";
</style>

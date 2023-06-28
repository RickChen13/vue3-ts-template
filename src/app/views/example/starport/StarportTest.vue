<template>
  <div>
    <el-text class="mx-1" size="large">{{ content }}</el-text>
  </div>
  <div>
    <el-button @click="goback()">back</el-button>
  </div>
  <div>
    <Starport port="my-id" keep-alive style="height: 400px">
      <StarportTest />
    </Starport>
  </div>
</template>

<script lang="ts">
import Component from '@/app/views/example/starport/StarportTest';
const components = new Component();
export default components.vue();
</script>

<style lang="scss" scoped>
@import "@/app/views/example/starport/StarportTest.scss";
</style>




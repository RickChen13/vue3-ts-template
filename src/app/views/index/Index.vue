<template>
    <div>
        <h1>Vue3 + TypeScript + Vite + ElementPlus</h1>
    </div>
</template>

<script lang="ts">
import Component from '@/app/views/index/Index';
const components = new Component();
export default components.vue();
</script>

<style lang="scss" scoped>
@import '@/app/views/index/Index.scss';
</style>

<template>
    <div>
        <el-text class="mx-1" size="large">{{ note }}</el-text>
    </div>
    <div>
        <router-link to="/starport">
            <!-- vue-starport不支持KeepAlive -->
            <Starport port="my-id" keep-alive style="height: 600px">
                <StarportTest />
            </Starport>
        </router-link>
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

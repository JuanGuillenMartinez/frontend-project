<template>
    <hello-world />
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core';
export default {
    components: {
        HelloWorld: defineAsyncComponent(() =>
            import("@/app/components/HelloWorld.vue")
        ),
    },
};
</script>

<style></style>

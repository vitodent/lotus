<template>
    <h1>Home Page - {{ route.params.category }}</h1>
</template>
<script setup>
import { useRoute } from 'vue-router'


const route = useRoute()

console.log(route.params)
</script>
<style></style>
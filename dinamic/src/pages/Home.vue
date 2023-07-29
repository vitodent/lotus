<template>
    
    <h1>Home {{ route.params.category }}</h1>
    <!-- <router-link to="/view/movieId">MoveID</router-link> -->
</template>


<script setup>
import {useRoute} from 'vue-router'

const route = useRoute()
</script>


<style>
</style>
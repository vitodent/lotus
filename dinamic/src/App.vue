<template>
  <Header/>
  <br>
  <RouterView />
  <Footer/>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</template>

<script setup>
  import Footer from './components/Footer.vue';
  import { RouterView } from 'vue-router';
  import Header from './components/Header.vue';
</script>

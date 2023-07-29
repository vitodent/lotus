<template>
  <h1>Home {{ route.params.category }}</h1>
  <!-- <router-link to="/view/movieId">MoveID</router-link> -->
</template>


<script setup>
import {ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const items = ref([])


import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

watch(route, async () => {
  try {
    const querySnapshot = await getDocs(collection(db, route.params.category));


    const result = querySnapshot.map((doc) => {
      return {
        id: doc.id,
        img: doc.data().preview,
        title: doc.data().title,
        rating: doc.data().rating,
      }
    });

    items.value = result

    console.log("Fetched data:", this.animes);
  } catch (error) {
    console.error("Error fetching data:", error);
  }

})
</script>


<style></style>
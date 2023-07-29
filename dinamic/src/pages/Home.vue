<template>
  <h1>Home {{ route.params.category }}</h1>
  <!-- <router-link to="/view/movieId">MoveID</router-link> -->

  <div id="images">
    <section class="images">
      <ul>
        <div v-for="movie in movies" :key="movie.id">
          <a href="#"><img :src="movie.preview" alt="1" /></a>
          <h3>{{ movie.title }}</h3>
          <h3> {{ movie.rating }}</h3>
        </div>
      </ul>
    </section>
  </div>
</template>


<script setup>
import { ref, onMounted, watch } from 'vue';
import { collection, query, where, getDocs, onSnapshot } from 'firebase/firestore';
import { useRoute } from 'vue-router';
import { db } from "../firebase";

const CollRef = collection(db, 'Movies');
const movies = ref([]);
const route = useRoute();

// Define a function to fetch data from Firestore
const fetchData = async (type) => {
  const OrderedCollRef = query(CollRef, where('type', '==', type));
  const querySnapshot = await getDocs(OrderedCollRef);
  const mov = [];
  querySnapshot.forEach((doc) => {
    const todo = {
      id: doc.id,
      title: doc.data().title,
      rating: doc.data().rating,
      preview: doc.data().preview,
    };
    mov.push(todo);
  });
  movies.value = mov;
};

// Use watch to trigger the fetch function when the 'type' parameter changes
watch(() => {
  return route.params.type; // Watch the 'type' parameter in the URL
}, async (newValue) => {
  // This function will be called when the 'type' parameter changes
  await fetchData(newValue);
});

// Call the fetch function when the component is mounted
onMounted(async () => {
  // Extract the 'type' parameter from the URL after '/home/'
  const typeFromURL = route.path.split('/home/')[1];
  // Default to 'anime' if the 'type' parameter is not present in the URL
  const type = typeFromURL || 'anime';
  await fetchData(type);
});

</script>


<style></style>
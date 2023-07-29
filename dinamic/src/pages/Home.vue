<template>
  <h1>Home {{ route.params.category }}</h1>
  <!-- <router-link to="/view/movieId">MoveID</router-link> -->

  <div id="images">
    <section class="images">
      <ul>
        <div v-for="movie in movies" :key="movie.id">
          <router-link :to="`/watch/${movie.id}`">
            <a href="#"><img :src="movie.preview" alt="1" /></a>
            <h3>{{ movie.title }}</h3>
            <h3> {{ movie.rating }}</h3>
          </router-link>
        </div>
      </ul>
    </section>
  </div>
</template>


<script setup>
import { ref, watch } from 'vue';
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

watch(route , async (newValue) => {
  await fetchData(newValue.params.category);
});

fetchData(route.params.category)
</script>


<style></style>
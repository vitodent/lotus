<template>
  <h1 class="font-effect-emboss">Alege ce vrei sa urmaresti</h1>
  <div id="images">
    <section class="images">
      <div v-for="movie in movies">
        <router-link :to="`/watch/${movie.id}`">
          <img :src="movie.preview" :alt="movie.title" />
          <h3 class="font-effect-emboss">
            {{ movie.title }} - {{ movie.rating }}/5
          </h3>
          <!-- Add icon library -->
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import {
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { useRoute } from "vue-router";
import { db } from "../firebase";

const CollRef = collection(db, "Movies");
const movies = ref([]);
const route = useRoute();

// Define a function to fetch data from Firestore
const fetchData = async (type) => {
  const OrderedCollRef = query(CollRef, where("type", "==", type));
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

watch(route, async (newValue) => {
  await fetchData(newValue.params.category);
});

fetchData(route.params.category);
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Borel&family=Inter:wght@300&family=Lugrasimo&family=Notable&family=Nunito+Sans:opsz,wght@6..12,200&family=REM:wght@300&family=Rammetto+One&family=Roboto+Mono:ital,wght@1,500&family=Shrikhand&display=swap");
body {
  margin: 0;
}

.header-container {
  background-color: rgb(22, 22, 22);
}

#header-container {
  font-family: "Lugrasimo", cursive;
  padding: 20px 0;
  color: white;
  max-width: 960px;
  margin: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-container img {
  height: auto;
  width: 100px;
}

.menu_container a {
  text-decoration: none;
  color: rgb(255, 255, 255);
  text-transform: uppercase;
}

.menu_container {
  display: flex;
  widows: auto;
  align-items: center;
  column-gap: 50px;
}
h1 {
  font-family: "Rammetto One", cursive;
  text-align: center;
  text-shadow: 0 0 3px #ff0000;
  padding-top: 30px;
  padding-bottom: 25px;
  color: white; /* Base color for the text */
}

.images {
  margin-top: center;
  /* max-width: 960px; */
}
.images {
  display: flex;
  justify-content: center;
  column-gap: 45px;
  row-gap: 45px;
  flex-wrap: wrap;
  text-align: center;
  font-family: "Nunito Sans", sans-serif;
  font-size: x-large;
  font-style: bold;
  padding: auto;
  shape-margin: 3px;
}
.images h3 {
  color: #fff;
}
.images span {
  color: #fff;
}
.images img {
  align-items: center;
  height: 450px;
  width: 370px;
  object-fit: cover;
  object-position: top center;

  border-radius: 50px;
  background-image: url(images/bg-pattern.jpg);
  background-color: #cccccc;
}
ul {
  list-style-type: none;
}

html {
  background: rgb(5, 5, 5);
}

.menu-item:hover {
  text-decoration: underline;
}
</style>

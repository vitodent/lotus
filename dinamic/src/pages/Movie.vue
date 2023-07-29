<template>
    <body>
    <h1>Movie | Reviews</h1>
     <div id="images">
    <section class="images">

      <ul>
        <div v-for="movies in moviess" :key="movies.id">
          <a href="#"><img :src="movies.img" alt="1" /></a>
          <h3>{{ movies.title }}</h3>
          <h3> {{ movies.rating }}</h3>
        </div>
      </ul>

    </section>
    </div>
  </body>
</template>

<script>
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export default {
  data() {
    return {
      moviess: [],
    };
  },
  async mounted() {
    try {
      const querySnapshot = await getDocs(collection(db, "movies"));
      querySnapshot.forEach((doc) => {
        this.moviess.push({
          id: doc.id,
          img: doc.data().preview,
          title: doc.data().title,
          rating: doc.data().rating,
        });
      });
      console.log("Fetched data:", this.moviess);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
};
</script>
<style>

h3 {
  font-size: 30px;}
.images  {
display: flex;
justify-content: center;
column-gap: 32px;
text-align: center;
font-family:  'Nunito Sans', sans-serif;
shape-margin: 3px;}
.images img {
align-items: center;
height: 500px;
display: block;
position: relative;
margin: 20px;

padding: 20px;
border-radius: 50px;
}
ul {
  list-style-type: none;
}

</style>
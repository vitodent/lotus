<template>
  <body>
  <div id="images">
   <h1>Anime | Reviews</h1>
    <section class="images">
      <ul>
        <div v-for="anime in animes" :key="anime.id">
          <a href="#"><img :src="anime.img" alt="1" /></a>
          <h3>{{ anime.title }}</h3>
          <h3> {{ anime.rating }}</h3>
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
      animes: [], 
    };
  },
  async mounted() {
    try {
      const querySnapshot = await getDocs(collection(db, "anime"));
      querySnapshot.forEach((doc) => {
        this.animes.push({
          id: doc.id, // Include the document ID as well if you need it later
          img: doc.data().preview,
          title: doc.data().title,
          rating: doc.data().rating,
        });
      });
      console.log("Fetched data:", this.animes);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
};


</script>
<style>
h3 {
  font-size: 30px;}
h1 {
  font-size: 50px;
  text-align: center;
}
.images  {
border: 3px white;
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
margin-left: auto;
margin-right: auto;
margin: 20px;
width: 400px;
padding: 20px;
border-radius: 50px;
}
ul {
  list-style-type: none;
}

</style>
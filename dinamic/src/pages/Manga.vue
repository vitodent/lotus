<template>
<body>
    <h1>Manga | Reviews</h1>
     <div id="images">
    <div class="images">
      <ul>
        <div v-for="manga in mangas" :key="manga.id" class="">
          <a href="#"><img :src="manga.img" alt="1" /></a>
          <h3>{{ manga.title }}</h3>
          <h3> {{ manga.rating }}</h3>
        </div>
      </ul>

    </div>
    </div>
  </body>

</template>

<script>
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export default {
  data() {
    return {
      mangas: [],
    };
  },
  async mounted() {
    try {
      const querySnapshot = await getDocs(collection(db, "manga"));
      querySnapshot.forEach((doc) => {
        this.mangas.push({
          id: doc.id, // Include the document ID as well if you need it later
          img: doc.data().preview,
          title: doc.data().title,
          rating: doc.data().rating,
        });
      });
      console.log("Fetched data:", this.mangas);
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
column-gap: 30px;
text-align: center;
font-family:  'Nunito Sans', sans-serif;}
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
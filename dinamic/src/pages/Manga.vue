<template>
<<<<<<< HEAD
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
=======
<h1>Manga</h1>
<h1 class="font-effect-emboss">Alege ce vrei sa urmaresti</h1>
     <div id="images">
    <section class="images">
      
      
        <div class="box">
            <img src="https://i.ibb.co/bFdBk2w/7.jpg">
          <h3 class="font-effect-emboss">Dragon Ball </h3>
           <!-- Add icon library -->
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            
        </div>
        <div class="box">
        <img src="https://i.ibb.co/XDmHg7P/8.jpg" >
            <h3 class="font-effect-emboss"> Inuyasha </h3>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            
        </div>
         <div class="box">
        <img src="https://i.ibb.co/ct7rN7V/9.jpg">
          <h3 class="font-effect-emboss"> Sailor Moon </h3>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            
          </div>
    </section>
    </div>
</template>
<!-- <script></script> -->
<style>
.images {
  margin-top: center;
  /* max-width: 960px; */

}
.images  {
  display: flex;
  justify-content: space-between;
  align-items: left;
  text-align: center;
 font-family:  'Nunito Sans', sans-serif;
 font-size: x-large;
 font-style: bold;
 padding: auto;
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
>>>>>>> f0e9f60a5ad0787001a0d3895f75485bd1a88b4b
}
ul {
  list-style-type: none;
}
<<<<<<< HEAD

=======
text {
  text-align: center;
}
>>>>>>> f0e9f60a5ad0787001a0d3895f75485bd1a88b4b
</style>
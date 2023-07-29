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
    <h1>Movie</h1>

    <h1 class="font-effect-emboss">Alege ce vrei sa urmaresti</h1>
     <div id="images">
    <section class="images">
      
      
        <div>
        <img src="https://i.ibb.co/hZ2J0Tw/4.jpg" >
          <h3 class="font-effect-emboss">Joker </h3>
           <!-- Add icon library -->
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    
        </div>
        <div>
            <img src="https://i.ibb.co/hRxQRxB/5.jpg">
            <h3 class="font-effect-emboss"> Price & Prejudice </h3>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            
        </div>
         <div>
        <img src="https://i.ibb.co/mcXQMYR/6.jpg">
          <h3 class="font-effect-emboss"> La Casa de Papel </h3>
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
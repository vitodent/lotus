<template>
  <section class="container">
    <section class="section_bg">
      <div id="video-container">
        <iframe
          :src="movie.trailer"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <h1>{{ movie.title }} - {{ movie.rating }}/5</h1>
      <h2>Anul: {{ movie.year }}</h2>

      <p>
        {{ movie.description }}
      </p>
    </section>

    <div id="comentariu">
      <div>
        <label for="fname">Nume:</label><br />
        <input
          type="text"
          id="fname"
          v-model="reviewName"
          name="fname"
          placeholder="Nume"
        />
      </div>

      <div>
        <label for="lname">Comentariu:</label><br />
        <textarea
          id="lname"
          v-model="reviewMessage"
          placeholder="Scrie.."
          name="lname"
        ></textarea>
      </div>

      <button class="submit-btn" v-on:click="leaveReviewHandler">
        Lasa review
      </button>
    </div>

    <section class="reviews">
      <div v-for="review in reviews">
        <span>{{ review.reviewName }}</span>
        <p>
          {{ review.reviewText }}
        </p>
      </div>
    </section>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import {
  doc,
  getDoc,
  getDocs,
  updateDoc,
  collection,
  where,
  query,
  addDoc,
} from "firebase/firestore";
import { db } from "../firebase";

const route = useRoute();
const movie = ref([]);
const reviews = ref([]);

const reviewName = ref("");
const reviewMessage = ref("");

const getDocumentHandler = async (itemId) => {
  const docRef = doc(db, "Movies", itemId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const data = docSnap.data();
    console.log("data", data);
    movie.value = {
      title: data.title,
      rating: data.rating,
      trailer: data.trailerlink,
      description: data.description,
      year: data.year,
    };
  } else {
  }
};
getDocumentHandler(route.params.itemId);

const updDocumentHandler = async (itemId) => {
  const ratingRef = doc(db, "Movies", itemId);

  await updateDoc(ratingRef, {
    rating: 100,
  });
};
updDocumentHandler(route.params.itemId);

async function getReviews(itemId) {
  try {
    const CollRef = collection(db, "review");
    const OrderedCollRef = query(CollRef, where("movieId", "==", itemId));
    const querySnapshot = await getDocs(OrderedCollRef);

    const data = [];

    querySnapshot.forEach((doc) => {
      data.push({
        reviewText: doc.data().reviewText,
        reviewName: doc.data().reviewName,
      });

      reviews.value = data;
    });
  } catch (error) {
    console.log("error", error);
    console.error("Error while querying landmarks:", error);
  }
}
getReviews(route.params.itemId);

async function addReviews(body) {
  const docRef = await addDoc(collection(db, "review"), body);
}

const leaveReviewHandler = async () => {
  const reviewBody = {
    reviewName: reviewName.value,
    reviewText: reviewMessage.value,
    movieId: route.params.itemId,
  };

  reviews.value.push(reviewBody)

  await addReviews(reviewBody);

  reviewName.value = "";
  reviewMessage.value = "";
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,800;1,900;1,1000&display=swap");

body {
  margin: 50px;
}

.submit-btn {
  padding: 16px 24px;
  width: auto;
  margin: auto;
}

#comentariu {
  margin: 32px 0px;
}

#video-container {
  max-width: 960px;
  margin: auto;
}

.reviews {
  margin-bottom: 50px;
}

.container {
  max-width: 960px;
  margin: auto;
}

.header-container {
  font-family: "Nunito", sans-serif;
  margin: 0 auto;
  padding: 20px 0;
  background-color: rgb(22, 22, 22);
  cursor: pointer;
  color: white;
}

#header-container {
  max-width: 1100px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-container img {
  height: auto;
  width: 100px;
}

.menu_container li a {
  text-decoration: none;
  color: rgb(255, 255, 255);
  padding: 80px;
  text-transform: uppercase;
}

.menu_container {
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  align-items: center;
}

h1 {
  text-align: center;
  text-shadow: 0 0 3px #ff0000;
  padding-top: 30px;
  padding-bottom: 25px;
}

.images {
  margin-top: center;
  /* max-width: 960px; */
}
.images {
  display: flex;
  justify-content: space-between;
  align-items: left;
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

html {
  background: rgb(47, 40, 40);
  background: radial-gradient(
    circle,
    rgba(47, 40, 40, 1) 0%,
    rgba(38, 34, 30, 1) 100%
  );
}

#partners {
  max-width: 960px;
  margin: auto;
}

#partners ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#partners img {
  width: 200px;
  height: auto;
}

.section_bg {
  color: white;
  align-items: center;
}

.section_bg h1 {
  text-align: center;
  color: white;
}

.section_bg p {
  text-align: center;
}

iframe {
  width: 100%;
  height: 400px;
}

/* Style the headings */
h1 {
  color: white;
  font-size: 28px;
  margin: 10px 0;
}

h2 {
  color: #cab5b5;
  font-size: 20px;
  margin: 5px 0;
}

/* Style the paragraph */
p {
  color: rgb(244, 232, 232);
  line-height: 1.6;
}

iframe {
  aspect-ratio: 16/9;
  width: 960px;
  margin: auto;
  height: auto;
}

form {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  color: white;
}

input[type="text"],
textarea {
  margin-bottom: 10px;
  width: 100% !important;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

/* Style the comments section */
section:nth-child(2) {
  margin-top: 40px;
}

/* Style the comment div */
div p {
  margin-bottom: 10px;
}

span {
  font-weight: bold;
  color: #c7961c;
}

#partners {
  border-radius: 25px;
  max-width: 960px;
  margin: auto;
  display: grid;
  border: rounded;
}

#partners ul {
  display: flex;
  align-items: center;
  list-style-type: none;
  position: center;
  margin: 10px;
}

#partners img {
  width: 130px;
  height: 130px;
  border-radius: 200px;
  border: 3px solid black;
  /* object-fit: cover; */
  display: flex;
  justify-content: space-between;
}

#parteners li {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  list-style-type: none;
}
#partners h4 {
  display: flex;
  justify-content: space-between;
  padding-left: 35px;
}

#partners p {
  display: block;
}

img {
  object-fit: cover;
}

#partners {
  display: flex;
  justify-content: center;
  align-items: center;
}

.contact li {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.contact {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}
#insta {
  color: white;
}

ul {
  padding: 0;
}

.footer {
  padding: 30px 0px;
  font-family: "Nunito", sans-serif;
  text-align: center;
}

.footer .row {
  width: 100%;
  margin: 1% 0%;
  padding: 0.6% 0%;
  color: #fff;
  font-size: 0.8em;
}

.footer .row a {
  text-decoration: none;
  color: gray;
  transition: 0.5s;
}

.footer .row a:hover {
  color: #fff;
}

.footer .row ul {
  width: 100%;
}

.footer .row ul li {
  display: inline-block;
  margin: 0px 30px;
}

.footer .row a i {
  font-size: 2em;
  margin: 0% 1%;
}

input {
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 22px;
  width: auto;
}
</style>

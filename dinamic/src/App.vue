<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import { getDatabase } from "firebase/database";
// const database = getDatabase();





// import { getDatabase, ref, push, set } from "firebase/database";

// // Create a new post reference with an auto-generated id
// const db = getDatabase();
// const postListRef = ref(db, 'posts');
// const newPostRef = push(postListRef);
// set(newPostRef, {
//     // ...
// });





// import { getDatabase, ref, onChildAdded, onChildChanged, onChildRemoved } from "firebase/database";

// const db = getDatabase();
// const commentsRef = ref(db, 'post-comments/' + postId);
// onChildAdded(commentsRef, (data) => {
//   addCommentElement(postElement, data.key, data.val().text, data.val().author);
// });

// onChildChanged(commentsRef, (data) => {
//   setCommentValues(postElement, data.key, data.val().text, data.val().author);
// });

// onChildRemoved(commentsRef, (data) => {
//   deleteComment(postElement, data.key);
// });


</script>

<template>
  <header class="header-container">
    <RouterLink to="/home"><img class="logo" src="https://i.ibb.co/N1VDV6D/logo-480.png"></RouterLink>
    <nav class="menu-container">
      <ul>
        <li><a class="menu-item" href="#"><router-link to="/view/movie">Movies</router-link></a></li>
        <li><a class="menu-item" href="#"><router-link to="/view/anime">Anime</router-link></a></li>
        <li><a class="menu-item" href="#"><router-link to="/view/manga">Manga</router-link></a></li>
      </ul>
    </nav>
    <div class="search-box">
    <button class="btn-search"><img class="search" src="https://icons.veryicon.com/png/o/miscellaneous/prototyping-tool/search-bar-01.png"></button>
    <input type="text" class="input-search" placeholder="  Type to Search...">
  </div>
</header>
  <br>
  <RouterView />
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
body {
  font-family: 'Nunito', sans-serif;
  color: aliceblue;
  margin:10px;
  background-color: #55505C;
}
a {
  text-decoration: none;
  color: aqua;
}
a:hover {
  color: bisque;
}
.header-container {
  padding: 10px 0;
  background-color:#5D737E;
  color: white;
  display: flex;
  align-items: center; 
  margin: auto;
  border-radius: 50px;
  box-shadow: 10px 10px 130px rgb(76, 68, 92);
}

li {
  display: inline;
  margin-left: 80px;
  position: relative;
  font-size: 20px;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;}
.menu-item {
  position: relative; 
  padding: 2px;
  border: 2px solid transparent; 
  transition: font-size 0.2s;}
.menu-container {
  height: auto;
  width: 50px; 
  flex-grow: 1;
}
.logo {
  width: 60px;
  height: auto;
  margin-left: 60px;
  transition: all .2s ease-in-out;
}
.logo:hover {
  transform: scale(1.5);
  
}
.menu-item:hover {
  font-size: 110%;
  border: 2px solid transparent;
  
}
.search-box{
  width: fit-content;
  height: fit-content;
}
.input-search{
  height: 50px;
  width: 50px;
  border-style: none;
  
  font-size: 18px;
  letter-spacing: 2px;
  outline: none;
  border-radius: 25px;
  transition: all .5s ease-in-out;
  background-color: #22A6B3;
  padding-right: 40px;
  color:#fff;
  margin-right: 60px; 
}
.input-search::placeholder{
  color:rgba(255,255,255,.5);
  font-size: 18px;
  letter-spacing: 3px;
  font-weight: 100;

}
.btn-search{
  width: 50px;
  height: 50px;
  border-style: none;
  font-size: 20px;
  font-weight: bold;
  outline: none;
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
  color:#ffffff ;
  background-color:transparent;
  pointer-events: painted;
  margin-left: 60px;
}
.btn-search:focus ~ .input-search{
  width: 300px;
  border-radius: 0px;
  background-color: transparent;
  border-bottom:1px solid rgba(255,255,255,.5);
}
.input-search:focus{
  margin-left: 90px;
  width: 300px;
  border-radius: 0px;
  background-color: transparent;
  border-bottom:1px solid rgba(255,255,255,.5);
  transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
}
button {
  border: none;
  cursor: pointer;
  appearance: none;
  background-color: inherit;
  transition: transform .7s ease-in-out;
  margin-left:10px;
  margin-right: 300px;
}
button:hover {
   transform: rotate(360deg);
}
.search {
  width: 30px;
 height: auto;
 margin-right: 60px;
 margin-inline-end: auto;
}
h1 {
  margin: 20px;
}
</style>
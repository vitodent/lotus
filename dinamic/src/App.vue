<script setup>
import { RouterLink, RouterView } from 'vue-router'
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
</header>
  <br>
  <RouterView />
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
body {
  font-family: 'Nunito', sans-serif;
  color: aliceblue;
}
a {
  text-decoration: none;
  color: aqua;
}
a:hover {
  color: bisque;
}
.header-container {
  padding: 20px 0;
  background-color:rgb(22, 22, 22);
  color: white;
  display: flex;
  align-items: center; 
  margin: auto;
  border-radius: 50px;
  box-shadow: 10px 10px 130px black;
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
  width: 50px;
  height: auto;
  margin-left: 60px;
}
.menu-item:hover {
  font-size: 110%;
  border: 2px solid transparent;
}
</style>
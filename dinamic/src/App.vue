<template>
  <Header/>
  <br>
  <RouterView />
  <Footer/>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  h1, h3, h4 {
    font-family: 'Nunito', sans-serif;
  }
  body {
    width: 100%;
    height: 100%;
    font-family: 'Nunito', sans-serif;
    color: aliceblue;
    background-color: black;
  }
  footer {
    position: absolute;
  /* }
  a {
    text-decoration: none;
    color: rgb(221, 222, 222);
  }
  a:hover {
    color: rgb(42, 88, 196);
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
    font-size: 25px;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }
  .menu-item {
    position: relative;
    padding: 2px;
    border: 2px solid transparent;
    transition: font-size 0.2s;
  }
  .menu-container {
    height: auto;
    width: 50px;
    flex-grow: 1;
  }
  .logo {
    width: 50px;
    height: auto;
    margin-left: 60px;
    transition: all .2s ease-in-out;
  }
  button {
  transition: transform .7s ease-in-out;}
  .logo:hover {
    transform: scale(1.5);
  }
  .menu-item:hover {
    font-size: 110%;
    border: 2px solid transparent;
  }
  .search-box {
    width: fit-content;
    height: fit-content;
    position: relative;
    display: flex;
    align-items: center; 
  }
  .input-search {
    height: 50px;
    width: 50px;
    border-style: none;
    font-size: 18px;
    letter-spacing: 2px;
    outline: none;
    border-radius: 25px;
    transition: all .5s ease-in-out;
    background-color: #242326;
    padding-right: 60px;
    padding-left: 20px; 
    color: #fff;
    margin-right: 60px;
  }
  .input-search::placeholder {
    color: rgba(255,255,255,.5);
    font-size: 18px;
    letter-spacing: 2px;
    font-weight: 100;
  }
  .btn-search {
    width: 50px;
    height: 50px;
    border-style: none;
    font-size: 20px;
    font-weight: bold;
    outline: none;
    cursor: pointer;
    border-radius: 50%;
    position: absolute;
    right: 0; 
    margin-left: 0; 
    padding-right: 40px; 
    color: #ffffff;
    background-color: transparent;
    margin-right: 50px;
  }
  .search {
    width: 30px;
    height: auto;
    margin: 0;
  }
  .input-expanded {
    width: 300px;
    border-radius: 0px;
    background-color: transparent;
    border-bottom: 1px solid rgba(255,255,255,.5);
    margin-left: 60px;
  }
  h1 {
  margin: 20px;
}button:hover { */
   transform: rotate(360deg);
}
@import url('https://fonts.googleapis.com/css2?family=Borel&family=Inter:wght@300&family=Lugrasimo&family=Notable&family=Nunito+Sans:opsz,wght@6..12,200&family=REM:wght@300&family=Rammetto+One&family=Roboto+Mono:ital,wght@1,500&family=Shrikhand&display=swap');
body{
  margin: 0;
}

.header-container {
    font-family: 'Lugrasimo', cursive;
  margin: 0 auto;
  padding: 20px 0;
  background-color:rgb(22, 22, 22);
  cursor: pointer;
  color: white;
  /* border-bottom-width: 1px;
  border-color:#fff; */
  
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
    font-family: 'Rammetto One', cursive;
  text-align: center;
  text-shadow: 0 0 3px #ff0000;
  padding-top: 30px;
  padding-bottom: 25px;
  color: #0d0d0d; /* Base color for the text */
  text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #98bdc7, 0 0 70px #8ed7de, 0 0 80px #78f2e6, 0 0 100px #88b9e4; /* Neon glow effect */

}


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
 shape-margin: 3px;
}
.images h3{
    color: #fff;
    text-shadow:
        0 0 7px #fff,
        0 0 10px #fff,
        0 0 21px #fff,
        0 0 42px #0fa,
        0 0 82px #0fa,
        0 0 92px #0fa,
        0 0 102px #0fa,
        0 0 151px #0fa;
}
.images span{
    color: #fff;
    text-shadow:
        0 0 7px #fff,
        0 0 10px #fff,
        0 0 21px #fff,
        0 0 42px #0fa,
        0 0 82px #0fa,
        0 0 92px #0fa,
        0 0 102px #0fa,
        0 0 151px #0fa;
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

html{
    background: rgb(5, 5, 5);
}

</style>

<script setup>
  import Footer from './components/Footer.vue';
  import { RouterLink, RouterView } from 'vue-router';
  import Header from './components/Header.vue';
</script>

<script>
  export default {
    data: function(){
      return{
        isSearchExpanded: false
      }
    },
    components: {
      Footer
    },
    methods:{
      toggleSearch: function(){
        this.isSearchExpanded = !this.isSearchExpanded;
      }
    }
  }
</script>

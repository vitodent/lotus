<!-- <script setup>
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
    <div class="search-box">
    <button class="btn-search"><img class="search" src="https://icons.veryicon.com/png/o/miscellaneous/prototyping-tool/search-bar-01.png"></button>
    <input type="text" class="input-search" placeholder="  Type to Search...">
  </div>
</header>
  <br>
  <RouterView />
</template>

<style>
<meta name="viewport" content="width=device-width, initial-scale=1.0"> 
  @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
body {
  font-family: 'Nunito', sans-serif;
  color: aliceblue;
  margin:10px;
  background-color: #100f11;
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
  background-color:#333235;
  color: white;
  display: flex;
  align-items: center; 
  margin: auto;
  border-radius: 50px;
  box-shadow: 10px 10px 130px rgba(5, 5, 5, 0.612)
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
  transform: scale(1.05);
  
}
.menu-item:hover {
  font-size: 110%;
  border: 2px solid transparent;
  
}
.search-box{
  width: fit-content;
  position: relative;
    display: flex;
    align-items: center;
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
  right: 0; /* Adjust the position to the right */
  margin-left: auto; 
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
 margin-inline-end: auto;
 margin-right: 0;
}
h1 {
  margin: 20px;
}
</style> -->
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
      <input
        type="text"
        class="input-search"
        :class="{ 'input-expanded': isSearchExpanded }"
        placeholder="   Type to Search..."
      />
      <button class="btn-search" @click="toggleSearch">
        <img class="search" src="https://icons.veryicon.com/png/o/miscellaneous/prototyping-tool/search-bar-01.png" />
      </button>
    </div>
  </header>
  <br>
  <RouterView />

  <section id="partners">
    <img class="profile-picture" src="images/IMG_1t.jpg" />
          <div class="profile-info">
            <a id="insta" href="https://www.instagram.com/tatiannabuzila.18/?igshid=OGQ5ZDc2ODk2ZA%3D%3D">@tatiannabuzila.19</a>
            <p class="role">Frontend Static</p>
          </div>

    <img class="profile-picture" src="images/IMG_1t.jpg" />
          <div class="profile-info">
            <a id="insta" href="https://www.instagram.com/arashiviv/?igshid=OGQ5ZDc2ODk2ZA%3D%3D">@arashiviv</a>
    </div>
    <img class="profile-picture" src="images/IMG_1t.jpg" />
          <div class="profile-info">
            <a id="insta" href="https://www.instagram.com/_regyna._/?igshid=OGQ5ZDc2ODk2ZA%3D%3D">@_regyna._</a>
            <p class="role">Frontend Dinamic</p>
          </div>
        <img class="profile-picture" src="images/IMG_1t.jpg" />
          <div class="profile-info">
            <a id="insta" href="https://www.instagram.com/userlism/?igshid=OGQ5ZDc2ODk2ZA%3D%3D">@userlism</a>
            <p class="role">Frontend Dinamic</p>
          </div>
      </section>
© Lotus 2023 || Designed By: Students of GirlsGoIT
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  body {
    width: 100%;
    height: 100%;
    font-family: 'Nunito', sans-serif;
    color: aliceblue;
    background-color: black;
  }
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
    font-size: 20px;
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
}button:hover {
   transform: rotate(360deg);
}
.credit  {
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
.credit img {
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
#partners{
  max-width: 960px;
  background-color: rgb(22, 22, 22);
  display: flex;
  align-items: center;
  margin: auto;
  padding: 20px 0;
  border-radius: 50px;
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

#partners ul {
  display: flex;
  align-items: center;
  list-style-type: none;
  position: center;
  margin: 10px;
}

#partners img{
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
#partners h4{
  display: flex;
  justify-content: space-between;
  padding-left: 35px;
  
}

#partners p{
  display: block;
}
.credit img{
  object-fit: cover;
}

.contact li {
    display: flex;
    justify-content: center; 
    flex-direction: column;
    align-items: center;
    text-align: center;
    list-style-type: none;
    margin: 20px; 
  }

  .credit {
    display: flex;
    justify-content: center; 
    align-items: center; 
    flex-direction: column;
    margin: 20px;;
  }

  .profile-picture {
    align-items: center;
    height: 130px;
    width: 130px;
    border-radius: 50%;
    border: 3px solid black;
    object-fit: cover;
    margin: 10px;
  }

  .profile-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 10px;
  }

  .profile-info a {
    color: white;
    font-size: 1.2rem;
  }

  .profile-info p {
    color: white;
    font-size: 1rem;
  }


  #insta{
    color: white;
  }

  .footer{
    padding:30px 0px;
    font-family: 'Nunito', sans-serif;
    text-align:center;
    }
    
    .footer .row{
    width:100%;
    margin:1% 0%;
    padding:0.6% 0%;
    color:#fff;
    font-size:0.8em;
    }
    
    .footer .row a{
    text-decoration:none;
    color:gray;
    transition:0.5s;
    }
    
    .footer .row a:hover{
    color:#fff;
    }
    
    .footer .row ul{
    width:100%;
    }
    
    .footer .row ul li{
    display:inline-block;
    margin:0px 30px;
    }
    
    .footer .row a i{
    font-size:2em;
    margin:0% 1%;
    }
</style>

<script setup>
  import { RouterLink, RouterView } from 'vue-router';
  import { ref } from 'vue';

  const isSearchExpanded = ref(false);

  function toggleSearch() {
    isSearchExpanded.value = !isSearchExpanded.value;
  }
</script>

<template>
<h1>Anime</h1>

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Lotus</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>

    <header class="header-container">
        <div id="header-container">
            <img id="logo" src="images/logo.png" />
            
            <nav class="header_item2">
                <ul class="menu_container">
                    <li><a href="index.html"> Anime </a></li>
                    <li><a href="index.html"> Movies </a></li>
                    <li><a href="index.html"> Manga </a></li>
                </ul>
            </nav>
        </div>
    </header>

    <h1 class="font-effect-emboss">Alege ce vrei sa urmaresti</h1>
     <div id="images">
    <section class="images">
      <ul>
        <div>
          <a href="#"><img src="images/1.jpg" alt="1" /></a>
          <h3 class="font-effect-emboss">Attack On Tittan  </h3>
           <!-- Add icon library -->
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            
         <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
        
        </div>
        <div>
          <a href="#"><img src="images/3.jpg" alt="1" /> </a>
            <h3 class="font-effect-emboss"> Your Name </h3>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            
                <span class="fa fa-star checked"></span>
                   <span class="fa fa-star checked"></span>
                   <span class="fa fa-star checked"></span>
                   <span class="fa fa-star checked"></span>
                   <span class="fa fa-star checked"></span>
        </div>
         <div>
          <a href="#"><img src="images/2.jpg" alt="1" /></a>
          <h3 class="font-effect-emboss"> Death Note </h3>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            
            <span class="fa fa-star checked"></span>
               <span class="fa fa-star checked"></span>
               <span class="fa fa-star checked"></span>
               <span class="fa fa-star checked"></span>
               <span class="fa fa-star checked"></span>
          </div>
      </ul>
    </section>
    </div>
  </body>
  <footer class="hi">

  </footer>
</template>
<script>

</script>
<style>

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
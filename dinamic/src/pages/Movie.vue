<template>
    <h1>Movie</h1>

    <h1 class="font-effect-emboss">Alege ce vrei sa urmaresti</h1>
     <div id="images">
    <section class="images">
      
      
        <div>
          <a href="#"><img src="images/4.jpg" alt="1" /></a>
          <h3 class="font-effect-emboss">Joker </h3>
           <!-- Add icon library -->
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    
        </div>
        <div>
          <a href="#"><img src="images/5.jpg" alt="1" /> </a>
            <h3 class="font-effect-emboss"> Price & Prejudice </h3>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            
        </div>
         <div>
          <a href="#"><img src="images/6.jpg" alt="1" /></a>
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
text {
  text-align: center;
}
</style>
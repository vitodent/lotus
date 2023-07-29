<template>
<h1>Anime</h1>

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Lotus</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>


    <h1 class="font-effect-emboss">Alege ce vrei sa urmaresti</h1>
     <div id="images">
    <section class="images">
      <ul>
        <div>
          <a href="#"><img src="images/1.jpg" alt="1" /></a>
          <h3 class="font-effect-emboss">Attack On Tittan  </h3>
           <!-- Add icon library -->
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            
        
        
        </div>
        <div>
          <a href="#"><img src="images/3.jpg" alt="1" /> </a>
            <h3 class="font-effect-emboss"> Your Name </h3>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            
              
        </div>
         <div>
          <a href="#"><img src="images/2.jpg" alt="1" /></a>
          <h3 class="font-effect-emboss"> Death Note </h3>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            
           
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

</style>
<template>
    <section class="section_bg">
    
    <iframe
      src="https://www.youtube.com/embed/_InqQJRqGW4"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
    


    <h1>Honey Heist - 4.3/5</h1>
    <h2>Anul: 2020</h2>

    <p>
        La Casa de Papel" este un film spaniol captivant despre un geniu criminal cunoscut ca "Profesorul" care organizează cel mai mare jaf din istorie, în timp ce își conduce echipa de hoți și ostatici într-un joc tensionat cu autoritățile. Suspansul, răsturnările de situație și personajele complexe au făcut din această serie un fenomen global apreciat de publicul din întreaga lume. În timp ce planul jafului se desfășoară, relațiile din cadrul echipei devin din ce în ce mai complicate. Conflictele personale și rivalitățile apar, iar loialitatea fiecărui membru este pusă la încercare. În același timp, liderul Profesorul își urmărește meticulos strategia, încercând să-și controleze echipa din umbră și să evite orice greșeală care ar putea pune în pericol reușita planului.
    </p>
    <hr>
</section>

    

            <form id="comentariu">
                <label for="fname">Nume:</label><br>
                <input type="text" id="fname" name="fname" value="" placeholder="Nume"><br>
                <label for="lname">Comentariu:</label><br>
                <textarea type="text" id="lname" placeholder="Scrie.." name="lname" value=""></textarea>
                <input type="button" value="Submit" />
              </form>

            <section>
        <div>
     <span>Tania</span>
      <p>
        La Casa de Papel este pur și simplu captivant! Intriga palpitantă, personajele complexe și răsturnările de situație te țin cu sufletul la gură de la început până la sfârșitul fiecărui episod. 
      </p>
      </div>
      <div>
        <span>Miroslav</span>
      <p>
        La Casa de Papel este o capodoperă cinematografică! Nu numai că povestea este extrem de captivantă și plină de surprize, dar și prestația actorilor este absolut remarcabilă. Filmul explorează teme precum moralitatea, justiția și libertatea într-un mod subtil și inteligent. Cu siguranță, unul dintre cele mai bune seriale pe care le-am văzut vreodată!
      </p>
      </div>
      <div>
        <span>Simion</span>
      <p>
        La Casa de Papel m-a ținut lipit de ecran de la prima secundă până la ultima. Povestea ingenioasă a jafurilor orchestrată de Profesorul și echipa sa de hoți este absolut fascinantă, iar narațiunea inteligentă cu flashback-uri te face să dezvălui încetul cu încetul trecutul și motivele personajelor. Acțiunea și suspansul sunt dozate perfect, iar momentele emoționale au o puternică rezonanță. Este o experiență cinematografică de neuitat, care merită toate laudele pe care le primește!
      </p>
      </div>
    <!-- aici trebuie sa fie mai multe comentarii -->
</section>
</template>
<script>
</script>
<style>

@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,800;1,900;1,1000&display=swap');

body{
  margin: 50px;
}

.header-container {
  font-family: 'Nunito', sans-serif;
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
  text-align: center;
  text-shadow: 0 0 3px #ff0000;
  padding-top: 30px;
  padding-bottom: 25px;


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
}
.images span{
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

html{
  background: rgb(47,40,40);
  background: radial-gradient(circle, rgba(47,40,40,1) 0%, rgba(38,34,30,1) 100%);

}


#partners{
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

.section_bg{
  color: white;
  align-items: center;
  ;
}

.section_bg h1{
  text-align: center;
  color: white;
} 

.section_bg p{
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
  width: 100%;
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
div {
  border: 1.5px solid #5c5252;
  padding: 10px;
  border-radius: 4px;
}

div p {
  margin-bottom: 10px;
}

span {
  font-weight: bold;
  color: #c7961c;
}

#partners{
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

img{
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
  #insta{
    color: white;
  }
  
  
  ul{
      padding: 0;
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
    
    input {
      align-items: center;
      justify-content: center;
      gap: 15px;
      padding: 22px;
      width: auto;
    }
</style>
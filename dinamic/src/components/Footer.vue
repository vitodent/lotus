<template>
  <section id="partners">
    <ul class="contact">
      <li>
        <img src="../../public/IMG_1.jpg" />
        <br />
        <a
          id="insta"
          href="https://www.instagram.com/tatiannabuzila.18/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
        >
          @tatiannabuzila.19
        </a>
        <p id="insta1">Frontend Static</p>
      </li>
      <li>
        <img src="../../public/IMG_2.jpg" />
        <br />
        <a
          id="insta"
          href="https://www.instagram.com/arashiviv/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
        >
          @arashiviv
        </a>
        <p>Frontend Static</p>
      </li>
      <li>
        <img src="../../public/IMG_3.jpg" />
        <br />
        <a
          id="insta"
          href="https://www.instagram.com/_regyna._/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
        >
          @_regyna._
        </a>
        <p>Frontend Dinamic</p>
      </li>
      <li>
        <img src="../../public/IMG_4.jpg" />
        <br />
        <a
          id="insta"
          href="https://www.instagram.com/userlism/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
        >
          @userlism
        </a>
        <p>Frontend Dinamic</p>
      </li>
    </ul>
  </section>

  <div id="footer-copy">
    © Lotus 2023 || Designed By: Students of GirlsGoIT
  </div>
</template>

<script setup>
</script>

<style>
#footer-copy {
  padding: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  transition: all 0.2s ease-in-out;
}
img:hover {
  transform: scale(1.1);
}
.credit {
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
.credit img {
  align-items: center;
  height: 500px;
  display: block;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin: 10px;
  width: 400px;
  padding: 20px;
  border-radius: 50px;
}
#partners {
  margin-top: 50px;
  max-width: 960px;
  background-color: rgb(22, 22, 22);
  display: flex;
  align-items: center;
  margin: auto;
  padding: 10px 0;
  border-radius: 50px;
  justify-content: space-around;
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

#partners img {
  width: 130px;
  height: 130px;
  border-radius: 200px;
  border: 3px solid black;
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
  display: block;
}
.credit img {
  object-fit: cover;
  object-position: center center;
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
  margin: 20px;
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

#insta {
  color: white;
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
</style>

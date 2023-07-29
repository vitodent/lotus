<template>
  <header class="header-container">
    <div id="header-container">
      <router-link to="/home/movies"
        ><img id="logo" src="../../public/logo.png"
      /></router-link>

      <nav class="menu_container">
        <div class="menu-item">
          <a href="index.html"
            ><router-link to="/home/movies">Movies</router-link>
          </a>
        </div>
        <div class="menu-item">
          <a href="index.html">
            <router-link to="/home/anime">Anime</router-link>
          </a>
        </div>
        <div class="menu-item">
          <a href="index.html">
            <router-link to="/home/manga">Manga</router-link>
          </a>
        </div>
      </nav>
    </div>
  </header>
</template>

<style>
.menu-container li:hover {
  text-decoration: underline;
}
</style>

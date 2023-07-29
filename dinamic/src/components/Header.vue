<template>
     <header class="header-container">
        <div id="header-container">
            <router-link to="/home"><img id="logo" src="../../public/logo.png" /></router-link>
            
            <nav class="header_item2">
                <ul class="menu_container">
                    <li><a href="index.html"><router-link to="/home/movies">Movies</router-link> </a></li>
                    <li><a href="index.html"> <router-link to="/home/anime">Anime</router-link> </a></li>
                    <li><a href="index.html"> <router-link to="/home/manga">Manga</router-link> </a></li>
                </ul>
            </nav>
        </div>
    </header>
</template>


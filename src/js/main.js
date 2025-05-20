'use strict';
console.log('JS funcionando');

// DATA
const btnSearch = document.querySelector(".btn_buscar");
const btnReset = document.querySelector(".btn_reset");
const inputAnime = document.querySelector(".input_anime");
const album = document.querySelector(".album");
let card = document.querySelector(".card");
const cardFav = document.querySelector(".card_fav");

const data = {
mal_id: 20,
url: "https://myanimelist.net/anime/20/Naruto",
images: {
jpg: {
image_url: "https://cdn.myanimelist.net/images/anime/1141/142503.jpg",
small_image_url: "https://cdn.myanimelist.net/images/anime/1141/142503t.jpg",
large_image_url: "https://cdn.myanimelist.net/images/anime/1141/142503l.jpg"
},
webp: {
image_url: "https://cdn.myanimelist.net/images/anime/1141/142503.webp",
small_image_url: "https://cdn.myanimelist.net/images/anime/1141/142503t.webp",
large_image_url: "https://cdn.myanimelist.net/images/anime/1141/142503l.webp"
}
},
title: "Naruto",
title_english: "Naruto",
title_japanese: "ナルト",
};

// FUNCTION
function printCard(){
    album.innerHTML = `
        <ul class="card">
            <div class="name">${data.title}</div>
            <div class="img">
                <img src="${data.images.webp.image_url}"
                alt="Foto del anime: ${data.title}">
            </div>
        </ul>`;
};

// EVENT
btnSearch.addEventListener ("click", () =>{
    console.log("Clickaste en BUSCAR");
    let searchAnime = inputAnime.value;
    console.log("Anime buscado: " + searchAnime);
    album.innerHTML = searchAnime;
    printCard();
});

btnReset.addEventListener ("click", () =>{
    console.log("Clickaste en RESET");
    album.innerHTML = " ";
    inputAnime.value = " ";
});

album.addEventListener ("click", () =>{
    console.log("Clickaste el cromo");
    album.classList.toggle("card_fav");
});

// PROBANDO MOVIDAS
function renderAnime() {
    let dataAnime = " ";
}

fetch('https://api.jikan.moe/v4/anime?q=naruto')
    .then()

renderAnime();
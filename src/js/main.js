'use strict';
console.log('JS funcionando');

// CONST
const btnSearch = document.querySelector(".btn_buscar");
const btnReset = document.querySelector(".btn_reset");
const inputAnime = document.querySelector(".input_anime");
const album = document.querySelector(".album");

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
// album.innerHTML = `
//     <ul class="card">
//         <div class="name">K-on! Temporada 2 HTT</div>
//         <div class="img"></div>
//     </ul>`;
album.innerHTML = `
    <ul class="card">
        <div class="name">${data.title}</div>
        <div class="img">
            <img src="${data.images.webp.image_url}"
            alt="Foto del anime: ${data.title}">
        </div>
    </ul>`;

// EVENT
btnSearch.addEventListener ("click", () =>{
    console.log("Clickaste en BUSCAR");
    let searchAnime = inputAnime.value;
    console.log("Anime buscado: " + searchAnime);
    album.innerHTML = searchAnime;
});

btnReset.addEventListener ("click", () =>{
    console.log("Clickaste en RESET");
    album.innerHTML = " ";
    inputAnime.value = " ";
});
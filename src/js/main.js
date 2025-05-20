'use strict';
console.log('JS funcionando');

// DATA
const btnSearch = document.querySelector(".btn_buscar");
const btnReset = document.querySelector(".btn_reset");
const inputAnime = document.querySelector(".input_anime");
const album = document.querySelector(".album");
let card;
// const cardFav = document.querySelector(".card_fav");

const data = [
    {
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
    },
{
    mal_id: 21,
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
    title: "Naruto 3",
    title_english: "Naruto",
    title_japanese: "ナルト",
    },
        {
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
    },
{
    mal_id: 21,
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
    title: "Naruto 4",
    title_english: "Naruto",
    title_japanese: "ナルト",
    }
];

// FUNCTION
function printCard(){
    let cards = " ";
    for(let i = 0; i < data.length; i++){
        cards += `
            <ul class="card">
                <div class="name">${data[i].title}</div>
                <div class="img">
                    <img src="${data[i].images.webp.image_url}"
                    alt="Foto del anime: ${data[i].title}">
                </div>
            </ul>`;            
        }    
    album.innerHTML = cards;
};

// EVENT
btnSearch.addEventListener ("click", () =>{
    console.log("Clickaste en BUSCAR");
    let searchAnime = inputAnime.value;
    console.log("Anime buscado: " + searchAnime);
    album.innerHTML = searchAnime;
    printCard();
    card = document.querySelector(".card");
});

btnReset.addEventListener ("click", () =>{
    console.log("Clickaste en RESET");
    album.innerHTML = " ";
    inputAnime.value = " ";
});

// card.addEventListener ("click", () =>{
//     console.log("Clickaste el cromo");
//     card.classList.toggle("card_fav");
// });

album.addEventListener ("click", (event) =>{
    console.log(event.target);
    if (event.target.classList.contains("card")){
        console.log("Clickaste el cromo");
        card.classList.toggle("card_fav");
    }
});

// PROBANDO MOVIDAS
function renderAnime() {
    let dataAnime = " ";
}

fetch('https://api.jikan.moe/v4/anime?q=naruto')
    .then(res => res.json())
    .then(data => {
        console.log(data);
    });
renderAnime();
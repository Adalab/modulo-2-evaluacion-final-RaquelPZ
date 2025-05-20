'use strict';
console.log('JS funcionando');

// DATA
const btnSearch = document.querySelector(".btn_buscar");
const btnReset = document.querySelector(".btn_reset");
const inputAnime = document.querySelector(".input_anime");
const album = document.querySelector(".album");
let card;
// const cardFav = document.querySelector(".card_fav");

const dataDemo = [
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
    title: "Naruto 2",
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
    title: "Naruto 3",
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
// function printCard(){
//     let cards = " ";
//     for(let i = 0; i < dataDemo.length; i++){
//         cards += `
//             <ul class="card">
//                 <div class="name">${dataDemo[i].title}</div>
//                 <div class="img">
//                     <img src="${dataDemo[i].images.webp.image_url}"
//                     alt="Foto del anime: ${dataDemo[i].title}">
//                 </div>
//             </ul>`;            
//         }    
//     album.innerHTML = cards;
//     return cards;
// };

function printCard(){
    let cards = " ";
    for(let i = 0; i < 25; i++){
        cards += `
            <ul class="card">
                <div class="name">${listAnimes[i].title}</div>
                <div class="img">
                    <img src="${listAnimes[i].images.webp.image_url}"
                    alt="Foto del anime: ${listAnimes[i].title}">
                </div>
            </ul>`;            
        }    
    album.innerHTML = cards;
    return cards;
};

// EVENT
// Click al btn y busca el anime escrito:
btnSearch.addEventListener ("click", () =>{
    let searchAnime = inputAnime.value;
    album.innerHTML = searchAnime;
    console.log("Clickaste en BUSCAR");
    console.log("Anime buscado: " + searchAnime);
});

// Click al btn y resentea la búsqueda:
btnReset.addEventListener ("click", () =>{
    console.log("Clickaste en RESET");
    album.innerHTML = " ";
    inputAnime.value = " ";
});

// Click al cromo y añade a favoritos:
album.addEventListener("click", (event) => {
  const card = event.target.closest(".card");
  if (card) {
    console.log("Has clickado un cromo");
    card.classList.toggle("card_fav");
  }
});

// PROBANDO MOVIDAS
fetch('https://api.jikan.moe/v4/anime?q=naruto')
    .then(res => res.json())
    .then(data => {
        console.log(data.data[5].mal_id);
        console.log(data.data[10].title);
        console.log(data.data[15].images.jpg.image_url);
        let listAnimes = data.data;
        console.log(listAnimes);
        let cards = " ";
    for(let i = 0; i < 25; i++){
        cards += `
            <ul class="card">
                <div class="name">${listAnimes[i].title}</div>
                <div class="img">
                    <img src="${listAnimes[i].images.webp.image_url}"
                    alt="Foto del anime: ${listAnimes[i].title}">
                </div>
            </ul>`;            
        }    
    album.innerHTML = cards;
    });

// printCard();
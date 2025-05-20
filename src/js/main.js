'use strict';
console.log('JS funcionando');
// ev.preventDefault();

// DATA
const btnSearch = document.querySelector(".btn_buscar");
const btnReset = document.querySelector(".btn_reset");
const inputAnime = document.querySelector(".input_anime");
const album = document.querySelector(".album");
let writeAnime;
let card;
let listAnimes;
let nameAnime;

// FUNCTION
function printCard(searchAnimes){
   console.log(searchAnimes);
       let cards = " ";
       for(let i = 0; i < searchAnimes.length; i++){
           cards += `
               <ul class="card">
                   <div class="name">${searchAnimes[i].title}</div>
                   <div class="img">
                       <img src="${searchAnimes[i].images.webp.image_url}"
                       alt="Foto del anime: ${searchAnimes[i].title}">
                   </div>
               </ul>`;            
           }    
       album.innerHTML = cards;
}


// EVENT
// Click al btn y busca el anime escrito:
btnSearch.addEventListener ("click", () =>{
    writeAnime = inputAnime.value;
    console.log("Clickaste en BUSCAR: " + writeAnime);
    console.log(nameAnime);
    console.log(listAnimes);
    let filterAnime = listAnimes.filter (n => n.title.includes(writeAnime));
    console.log(filterAnime);
    printCard(filterAnime);
});

// Click al btn y resentea la búsqueda:
btnReset.addEventListener ("click", () =>{
    console.log("Clickaste en RESET");
    printCard(listAnimes);
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
        console.log(data.data[10].title);;
        listAnimes = data.data;
        printCard(listAnimes);
        nameAnime = data.data.map(item => item.title);

     
    });

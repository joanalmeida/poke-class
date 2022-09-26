
function procesarPokemon(pokemon) {
    console.log(pokemon);
    let pokemonImg = document.getElementById("pokemon-img");
    pokemonImg.src = pokemon.sprites.front_default;
}


function searchPokemon(pokemonName) {
    let url = 'https://pokeapi.co/api/v2/pokemon/' + pokemonName;
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(pokemon => procesarPokemon(pokemon));
}

function buscarPokemon(event) {
    if(event.key === 'Enter') {
        searchPokemon(event.target.value.toLowerCase());
    }
}


let input = document.getElementById("pokemon-search");
input.addEventListener("keypress", buscarPokemon);










let lista = [ 
    { name: "ember", lvl: 25}, 
    { name:"arc", lvl:20 }
];


for (let i = 0; i < lista.length; i++) {
    let heroe = lista[i];
    console.log(heroe.name);   
}

for (const heroe of lista) {
    console.log(heroe)
}
let POKEMON_NAME;

function parsePokemon(pokemon) {
    POKEMON_NAME = pokemon.name;

    for(prop of pokemon.abilities) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(prop.ability.name));
        li.setAttribute("class", "list-group-item");
        document.getElementById("ability-list").appendChild(li);
    }

    let img = document.getElementById("pokemon-img");
    img.setAttribute("class", "card-img-top inverted");
    img.setAttribute("src", pokemon.sprites.front_default);
}

function searchPokemon() {
    let pokemonToSearch = document.getElementById("pokemonFinder").value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonToSearch}`)
        .then(response => response.json())
        .then(data => parsePokemon(data));
}


function searchRandomPokemon() {
    let randomPokemon = Math.floor(Math.random() * 251);
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`)
        .then(response => response.json())
        .then(data => parsePokemon(data));
}



function guessPokemon() {
    let img = document.getElementById("pokemon-img");
    img.setAttribute("class", "card-img-top");

    let pokemonName = document.getElementById("pokemon-name");
    pokemonName.innerText = POKEMON_NAME;

    let input = document.getElementById("guess");
    let result = document.getElementById("game-result");

    if(input.value === POKEMON_NAME) {
        result.innerText = "Ganaste";
    } else {
        result.innerText = "Perdiste";
    }
}

function handleKeyUp(event) {
    if (event.key === "Enter") {
        guessPokemon();
    }
}

function init() {
    let guessBtn = document.getElementById("guess");
    guessBtn.addEventListener("keyup", handleKeyUp);

    searchRandomPokemon();
}



init();


// integration with PokeAPI
const createPokemonInfo = (pokemon) => {
    const pokemonCard = document.createElement('div');
    pokemonCard.classList.add('pokemonCard');
    const pokemonName = document.createElement('div');
    pokemonName.innerHTML = `${pokemon.name}`;
    const pokemonImg = document.createElement('img');
    pokemonImg.src = `${pokemon.sprites.front_default}`;
    pokemonCard.appendChild(pokemonImg);
    pokemonCard.appendChild(pokemonName);
    pokedexContainer.appendChild(pokemonCard);
}
const fetchPoke = async () => {
    for (let i = 1; i <= 151; i++) {
        await getPokemon(i);
    }
}
const getPokemon = async id => {
    const url =
        `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url);
    const pokemon = await res.json();
    createPokemonInfo(pokemon);
}
// finish integration with pokeAPI 


const pokedexOpenButton = document.querySelector('.openPokedex');
const pokedexContainer = document.querySelector('.pokedex');
const pokedexOpen = () => {
    alert('hello!');
}

const wipeContainer = () => {
    pokedexContainer.innerHTML = '';
}


const loadPokedex = () => {
    wipeContainer();
    fetchPoke();
    pokedexContainer.style.flexDirection = 'row';
}

pokedexOpenButton.onclick = loadPokedex;

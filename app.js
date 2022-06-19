const createPokemonInfo = (pokemon) => {
    const pokemonCard = document.createElement('div');
    pokemonCard.innerHTML = `${pokemon.id}`;
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

const pokedexOpenButton = document.querySelector('.openPokedex')
const pokedexContainer = document.querySelector('.pokedex')
const pokedexOpen = () => {
    alert('hello!');
}

const wipeContainer = () => {
    pokedexContainer.innerHTML = '';
}


const loadPokedex = () => {
    wipeContainer();
    fetchPoke();
}

pokedexOpenButton.onclick = loadPokedex;

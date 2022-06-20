// integration with PokeAPI


const createPokemonInfo = (pokemon) => {
    const pokemonCard = document.createElement('div');
    // code for showcasing pokemon info onclick
    pokemonCard.addEventListener('click', () => {
        wipeContainer();
        const currentPokeDisplay = document.createElement('div');
        currentPokeDisplay.classList.add('pokemonCard2')
        const pokemonImg = document.createElement('img');
        pokemonImg.src = `${pokemon.sprites.front_default}`;
        const pokemonName = document.createElement('div');
        pokemonName.innerHTML = `${pokemon.name.toUpperCase()}`;
        const pokeStats = document.createElement('div');
        pokeStats.classList.add('pokeStats');
        const pokeWeight = document.createElement('p');
        const pokeHeight = document.createElement('p');
        const pokeType = document.createElement('p');
        pokeType.classList.add('pokeType');
        pokeWeight.innerHTML = `${pokemon.weight} lbs`;
        pokeHeight.innerHTML = `${pokemon.height} in`;
        pokeType.innerHTML = `${pokemon.types[0].type.name}`;
        if (pokeType.innerHTML.toLowerCase() === 'grass') {
            pokeType.classList.add('grass');
        } else if (pokeType.innerHTML.toLowerCase() === 'fire') {
            pokeType.classList.add('fire');
        }
        else if (pokeType.innerHTML.toLowerCase() === 'fighting') {
            pokeType.classList.add('fire');
        } else if (pokeType.innerHTML.toLowerCase() === 'water') {
            pokeType.classList.add('water');
        } else if (pokeType.innerHTML.toLowerCase() === 'rock') {
            pokeType.classList.add('rock');
        } else if (pokeType.innerHTML.toLowerCase() === 'electric') {
            pokeType.classList.add('electric');
        } else if (pokeType.innerHTML.toLowerCase() === 'normal') {
            pokeType.classList.add('normal');
        } else if (pokeType.innerHTML.toLowerCase() === 'ground') {
            pokeType.classList.add('ground');
        } else if (pokeType.innerHTML.toLowerCase() === 'psychic' || pokeType.innerHTML.toLowerCase() === 'ghost' || pokeType.innerHTML.toLowerCase() === 'poison') {
            pokeType.classList.add('purple');
        } else if (pokeType.innerHTML.toLowerCase() === 'psychic' || pokeType.innerHTML.toLowerCase() === 'ghost' || pokeType.innerHTML.toLowerCase() === 'bug') {
            pokeType.classList.add('bug');
        } else if (pokeType.innerHTML.toLowerCase() === 'psychic' || pokeType.innerHTML.toLowerCase() === 'ghost' || pokeType.innerHTML.toLowerCase() === 'fairy') {
            pokeType.classList.add('fairy');
        } else if (pokeType.innerHTML.toLowerCase() === 'psychic' || pokeType.innerHTML.toLowerCase() === 'ghost' || pokeType.innerHTML.toLowerCase() === 'dragon') {
            pokeType.classList.add('dragon');
        }
        pokeStats.appendChild(pokeHeight);
        pokeStats.appendChild(pokeWeight);
        pokeStats.appendChild(pokeType);
        currentPokeDisplay.appendChild(pokemonName);
        currentPokeDisplay.appendChild(pokemonImg);
        currentPokeDisplay.appendChild(pokeStats);
        pokedexContainer.appendChild(currentPokeDisplay);
    })
    //
    // adding the pokemon cards to the dom on pokedex button click
    pokemonCard.classList.add('pokemonCard');
    const pokemonName = document.createElement('div');
    pokemonName.innerHTML = `${pokemon.name}`;
    const pokemonImg = document.createElement('img');
    pokemonImg.src = `${pokemon.sprites.front_default}`;
    pokemonCard.appendChild(pokemonImg);
    pokemonCard.appendChild(pokemonName);
    pokedexContainer.appendChild(pokemonCard);
    //
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
    console.log(pokemon)
}
// finish integration with pokeAPI 
const body = document.querySelector('.body');
const nav = document.querySelector('.nav');
const pokedexOpenButton = document.querySelector('.openPokedex');
const pokedexContainer = document.querySelector('.pokedex');
const pokedexOpen = () => {
    alert('hello!');
}

const wipeContainer = () => {
    pokedexContainer.innerHTML = '';
}

const backButtonScript = () => {
    wipeContainer();
    window.location.reload();
}
const createBackButton = () => {
    const backButton = document.createElement('button');
    backButton.classList.add('backButton');
    backButton.addEventListener("click", backButtonScript);


    backButton.innerText = '<==';
    nav.appendChild(backButton);
}

const loader = document.createElement('div');
loader.classList.add('loader');

const loading = () => {
    pokedexContainer.style.display = 'flex';
    loader.style.display = 'none';
    createBackButton();

}
const loadPokedex = () => {


    nav.appendChild(loader);
    wipeContainer();

    fetchPoke();




    pokedexContainer.style.display = 'none';
    setTimeout(loading, 2000);
    pokedexContainer.style.flexDirection = 'row';
}

pokedexOpenButton.onclick = loadPokedex;

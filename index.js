const pokemonContainer = document.querySelector(".pokemon-container");

const fetchData = async (id) => {
	try {
		const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
		const data = await res.json()

		createPokemon(data)

	} catch (error) {
		console.log(error)
	}
}

const fetchPockemons = (number) => {
	for (let i = 1; i <= number; i++) {
		fetchData(i)
	}
}

fetchPockemons(9)

function createPokemon(pokemon) {
	const card = document.createElement('div')
	card.classList.add('pokemon-block')

	const spriteContainer = document.createElement('div')
	spriteContainer.classList.add('img-container')
	const sprite = document.createElement('img')
	sprite.src = pokemon.sprites.front_default
	spriteContainer.appendChild(sprite)

	const number = document.createElement('p')
	number.textContent = `#${pokemon.id}`

	const name = document.createElement('p')
	name.classList.add("name")
	name.textContent = pokemon.name

	card.appendChild(spriteContainer)
	card.appendChild(number)
	card.appendChild(name)

	pokemonContainer.appendChild(card);

}
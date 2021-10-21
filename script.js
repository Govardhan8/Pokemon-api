//Fetching image and details of the pokemons
const fetchDetails = async (id) => {
	//Using try catch to catch errors if any at the first api calling point
	try {
		//Image data from the api
		const imageData = await fetch(
			`https://pokeapi.co/api/v2/pokemon-form/${id}/`
		)
		const image = await imageData.json()

		//Pokemon details from the api
		const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
		const details = await data.json()

		//Returning the details and image data as an object
		return { details, image }
	} catch (error) {
		console.log(error)
	}
}

//Making both image and details as a single pokemon object and making an array of pokemons
const renderPokemon = async () => {
	const pokemons = []
	for (let i = 1; i <= 50; i++) {
		//Getting the pokemon data
		const pokemon = await fetchDetails(i)
		pokemons.push(pokemon)
	}
	return pokemons
}

//Rendering the Pokemons onto the screen
const pageRender = async () => {
	//Getting the array of pokemon objects
	const Pokemons = await renderPokemon()

	let cards = ''
	//Rendering the array of pokemon objects onto the screen
	Pokemons.forEach((pokemon) => {
		cards += `
        <section class="cardContainer">
	    <article class="card">
	                <img class="image" src="${pokemon.image.sprites.front_default}" alt="${pokemon.details.name}" />
                    <p class="name">${pokemon.details.name}</p>        
                    <p class="weight"> 
                        <span>Weight</span>
                        ${pokemon.details.weight} 
                    </p>   
        </article>
        <article class="details">
            <div>
                <span>Abilities</span>
                <p>
                ${pokemon.details.abilities[0]?.ability.name} ,
                ${pokemon.details.abilities[1]?.ability.name}
                </p>
                <span>Moves</span>
                <p>               
                    ${pokemon.details.moves[0].move.name},
                    ${pokemon.details.moves[1]?.move.name},
                    ${pokemon.details.moves[2]?.move.name},
                    ${pokemon.details.moves[3]?.move.name},
                    ${pokemon.details.moves[4]?.move.name},
                    ${pokemon.details.moves[5]?.move.name}
                </p>                     
            </div>
        </article>
        </section>
	`
	})

	document.body.innerHTML = `
    <header>
        <h1>POKEMON API</h1>
    </header>
    <main class="container">
        ${cards}
    </main>
    `
}

//Calling the render method
pageRender()

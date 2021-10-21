URL to get initials Pokémon details:

https://pokeapi.co/api/v2/pokemon?limit=50

URL to get abilities, name, moves and weight:

https://pokeapi.co/api/v2/pokemon/2/

URL to get image of Pokémon:

https://pokeapi.co/api/v2/pokemon-form/1/

Google Fonts Used:

Name-font: 'Rampart One'

Number-font: 'Abril Fatface'

Header-font: 'Domine'

Details-font: 'Fjalla One'

About the project:

The app has 60 Pokemon cards, which contains the data rendered from the above mentioned api's.

HTML part(index.html):

The app only has a script tag for loading the script.js file.
Rest of the content is rendered using only the DOM

CSS part(style.css):

The app is mainly constructed using css grids.

JS part(script.js):

The javascript part of the app is done with async,fetch and await for getting the data from the api.
The rendering part to the dom is done by using innerHTML and template literals.

Deployed at:

https://mystifying-kepler-081d8b.netlify.app/

const express = require('express'); 
const router = express.Router();
const {						// creamos variables para crear funciones de rutas
	getAllPokemons,
	getPokemonDetails,
	createPokemon
} = require('../controllers/pokemonControllers');
// ruta para traer todos los pokemons o sino arroja msj
router.get('/', async (req, res) => {
	const { name } = req.query;
	const poke = await getAllPokemons(name);
	poke
		? res.status(200).send(poke)
		: res.status(404).send(['No existe un pokemon con el nombre: ' + name]);
});
//ruta para traer pokemons por id sino arroja msj
router.get('/:id', async (req, res) => {
	const { id } = req.params;
	let poke = await getPokemonDetails(id);
	poke
		? res.status(200).send(poke)
		: res.status(404).send('No existe un pokemon con el id: ' + id);
});
//ruta para crear un pokemonm, parametros que debe incluir, msj de creacion y de error
router.post('/', async (req, res) => {
	const { name, id, img, hp, attack, defense, speed, height, weight, types } =
		req.body;
	let result = await createPokemon(
		name,
		id,
		img,
		hp,
		attack,
		defense,
		speed,
		height,
		weight,
		types
	);
	result === 'error'
		? res.status(400).send('El Pokemon no pudo ser creado')
		: res.status(200).send('Pokemon Creado Correctamente');
});



module.exports = router;

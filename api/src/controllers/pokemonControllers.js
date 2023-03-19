const {						// crea variables para estas funciones
	getPokemonApi,
	getPokemonDB,
	pokeFilterByName,
	getPokemonApiByID,
	getPokemonDbByID,
} = require('../helpers');

//variables de bd
const { Pokemon, Type } = require('../db');

//aplica funciones, construye un arreglo nuevo con las dos, filtra por nombre
const getAllPokemons = async (name) => {
	const [api, db] = await Promise.all([getPokemonApi(), getPokemonDB()]);
	const allPoke = [...db, ...api];
	if (name) {
		let prueba = await pokeFilterByName(allPoke, name);
		return prueba;
	}
	return allPoke;
};


const getPokemonDetails = async (id) => {
	let poke = null;
	if (id.length < 10) {
		poke = await getPokemonApiByID(id);
	} else {
		poke = await getPokemonDbByID(id);
	}
	return poke;
};

// crea un pokemon con los parametros obtenidos
const createPokemon = async (
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
) => {
	if (name) {
		let poke = await Pokemon.create({
			name: name.toLowerCase(),
			id,
			hp,
			img,
			attack,
			defense,
			speed,
			height,
			weight,
		});
		await poke.addType(types);
	} else {
		return 'error';
	}
};




module.exports = {
	getAllPokemons,
	getPokemonDetails,
	createPokemon
};

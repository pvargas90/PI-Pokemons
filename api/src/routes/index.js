//traemos Express y Router
const express = require('express');
const router = express.Router();

//variables que indican rutas
const pokeRoute = require('./pokemonRoutes');
const typeRoute = require('./typeRoutes');

//para /pokemons, utilizar tal funcion 

router.use('/pokemons', pokeRoute);
router.use('/types', typeRoute);
module.exports = router;

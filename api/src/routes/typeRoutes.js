const express = require('express');
const router = express.Router();
const { getTypesDB } = require('../controllers/typeControllers');

// funcion de ruta para traer todos los tipos o msj de error
router.get('/', async (req, res) => {
	let types = await getTypesDB();
	types.length
		? res.send(types)
		: res.status(400).send('Los tipos no pudieron obtenerse correctamente');
});

module.exports = router;

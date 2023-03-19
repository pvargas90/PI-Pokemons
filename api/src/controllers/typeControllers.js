let { Type } = require('../db'); //requerimos type de la bd


// funcion que traiga todos los tipes con atributos de id y name. 
let getTypesDB = async () => {
	let types = await Type.findAll({
		attributes: ['id', 'name'],
	});
	types = types.map((t) => {
		return { id: t.id, name: t.name };
	});
	return types;
};
module.exports = { getTypesDB };

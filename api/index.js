//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js'); //conexion al servidor
const { conn, Type } = require('./src/db.js'); // conexion a la base de datos
const axios = require('axios'); // libreria que nos permite hacer peticiones a un enlace HTTP(get,post,delete)

// Syncing all the models at once.
conn.sync({ force: true }).then(async () => {
	let info = await axios.get('https://pokeapi.co/api/v2/type'); //sincronizacion con api
	info = info.data.results.map((p) => ({ //mapeo de resultados por nombre
		name: p.name,
	}));

	let prom = info.map((type) =>	//mapeo de resultados por tipo relacionado con nombre
		Type.findOrCreate({
			where: { name: type.name },
		})
	);

	server.listen(3001, () => {   // comprobamos que estamos conectados o no 
		console.log('%s listening at 3001'); // eslint-disable-line no-console
	});
});

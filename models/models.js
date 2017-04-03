var path = require('path');
// Cargar el modelo ORM

//Uso de la BBDD SQLite
/*var sequelize = new Sequelize(null, null, null,
  { dialect:  "sqlite",
    storage:  "tbltareas.sqlite"
  }      
);*/
var storage  = process.env.DATABASE_STORAGE;
//var url = //process.env.DATABASE_URL.match(/(.*)\:\/\/(.*?)\:(.*)@(.*)\:(.*)\/(.*)/);
var DB_name  = 'd8f490ikj9dmut';
var user     = 'rointbggrmuiik';
var pwd      = 'bceb3f4d9996c1cea37dc4150be988b449d65103067e27eb214688d3bc73976a';
var protocol = 'postgres';
var dialect  = 'postgres';
var port     = '5432';
var host     = 'ec2-54-163-252-55.compute-1.amazonaws.com';

var Sequelize = require('sequelize');
var sequelize = new Sequelize(DB_name, user, pwd, 
  { dialect:  protocol,
    protocol: protocol,
    port:     port,
    host:     host,
    storage: storage,
    omitNull: true      // solo Postgres
  }      
);

//Importación al objeto sequelize la tabla a Tbltareas que esta en tbltareas.js
var Tbltareas = sequelize.import(path.join(__dirname,'tbltareas'));
//Exportar definición de la tabla Tbltareas, para usarlo en otros lugares de la app
exports.Tbltareas = Tbltareas;

//Sincronizando modelo definido con la BBDD podemos inicializarla
sequelize.sync().then(function() {
	Tbltareas.count().then(function (count){
		if (count === 0) {
			Tbltareas.create({nombre: 'Reunión con cliente',
						 etiquetas: 'Node, Fechas',
						 porcentaje: 15
			});
            Tbltareas.create({nombre: 'Desarrollo del mockup',
						 etiquetas: 'Node, Mockup, Diseño',
						 porcentaje: 50
			});
            Tbltareas.create({nombre: 'Generar repositorio Git',
						 etiquetas: 'Node, Versiones',
						 porcentaje: 100
			});
			then(function(){console.log('Base de datos inicializada')});
		};
	});
});

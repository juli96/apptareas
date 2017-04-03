var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var models = require('../models/models.js');

//findAll devuelve un array con el contenido de la BBDD

/*var tareasArray = [
    {
        "nom":"Diseño wireframe",
        "etiquetes": [ "wireframe","app","hibrida"],
        "realitzacio":"36"
    },
    {
        "nom":"Reunión",
        "etiquetes": ["app","hibrida"],
        "realitzacio":"36"
    },
    {
        "nom":"Desarrollo Layout",
        "etiquetes": [ "layout","app","hibrida"],
        "realitzacio":"36"
    },
    {
        "nom":"Reunión cliente",
        "etiquetes": [ "reunión","app","hibrida"],
        "realitzacio":"36"
    }
    ];
*/

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bienvenido a la pagina principal del proyecte Node'});
});



router.get('/tareas', function(req, res, next) {
  //res.render('tareas', { title: 'Tareas', tareas: tareasArray});
    models.Tbltareas.findAll().then(function(tbltareas) {
        res.render('tareas', { title: 'Tareas', tareas: tbltareas, errors: []});
    }).catch(function(error) { console.log("Error");})
});

router.get('/tareas/new', function(req, res, next) {
  res.render('newTarea', { title: 'Crear Tarea'});
});


router.post('/tareas/crear', (req, res) => {
    var newTarea ={
        "nom": req.body.nom,
        "etiquetes": req.body.etiquetes,
        "realitzacio": req.body.realitzacio        
    }
    tareasArray.push(newTarea);
    res.redirect('/tareas');
});


module.exports = router;

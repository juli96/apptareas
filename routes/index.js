var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var tareasArray = [
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


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bienvenido a la pagina principal del proyecte Node'});
});

router.get('/tareas', function(req, res, next) {
  res.render('tareas', { title: 'Tareas', tareas: tareasArray});
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

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Principal'});
});

router.get('/tareas', function(req, res, next) {
  res.render('tareas', { title: 'Tareas'});
});

router.get('/tareas/new', function(req, res, next) {
  res.render('newTarea', { title: 'Crear Tarea'});
});


router.post('/tareas/crear', function(req, res) {
  res.render('newTarea', { title: 'Crear Tarea'});
});




var tareas = [
{
"nom":"Diseño wireframe",
"etiquetes": [ "wireframe","app","hibrida"],
"realització":"36"
},
{
"nom":"Reunión",
"etiquetes": ["app","hibrida"],
"realització":"36"
},
{
"nom":"Desarrollo Layout",
"etiquetes": [ "layout","app","hibrida"],
"realització":"36"
},
{
"nom":"Reunión cliente",
"etiquetes": [ "reunión","app","hibrida"],
"realització":"36"
}
]



module.exports = router;

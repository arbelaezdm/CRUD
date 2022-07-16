var express = require('express');
var router = express.Router();
var peliculasController = require('../Controllers/peliculasController');

// Creacion
router.get('/crear', peliculasController.crear)

module.exports = router;

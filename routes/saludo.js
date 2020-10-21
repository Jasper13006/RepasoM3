var express = require('express');
var router = express.Router();


router.get('/', (req, res) => {
    res.send('Hola, bienvenido')
})



//PARA RECIBIR DATOS DENTRO DE LA URL SE PONEN LOS DOS PUNTOS PARA QUE SEPA QUE AHI LE VAN A ESCRIBIR ALGO
//PARA OBTENER EL VALOR DE LA URL ES: REQ.PARAMS.NOMBRE
router.get('/:nombre/:apellido', (req, res) => {
    res.send('Hola ' + req.params.nombre + " " + req.params.apellido + ' bienvenido')
})

module.exports = router;
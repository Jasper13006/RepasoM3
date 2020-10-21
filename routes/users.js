var express = require('express');
var router = express.Router();

//PARA RECIBIR DATOS COMO QUERY PARAMETER  SE HACE REQ.QUERY.NOMBRE
//PARA QUE RECIBA LSO DATOS CUADO ESCRIBIMOS LA DIRECCION EN EL BROWSER SE DEBEN ESCRIBIR LAS PROPIEDADES DESPUES DE UN SIGNO DE PREGUNTA
//!Y SI SON MAS DE UNA SE LAS DEBE COMBINAR CON UN & (EJ: localhost:3000/user?nombre=Arie&edad=26)
// app.get('/user', (req, res) => {//NO VA A HACER FALTA HACER REFERENCIA A USER, PORQUE LA BARRA SOLA VA A ESTAR HACIENDOLO
router.get('/', (req, res) => {//
    const nombre = req.query.nombre;
    const edad = req.query.edad;
    console.log("Nombre: ", nombre)
    console.log("Edad: ", edad);
    //AQUI SE PUEDEN IMPLEMENTAR METODOS O FUNCIONES CON JAVASCRIPT PARA LO QUE NECESITEMOS 
    res.send("Ok")
});

//ES MUY IMPORTANTE INSTALAR EL BODY PARSER, Y DESPUES DE INSTALARLO EXPORTARLO, SINO LOS POST CON BODY NO VAN A FUNCIONAR
router.post('/', (req, res) => {
    const { nombre, apellido, edad } = req.body;

    console.log("Nombre: ", nombre);
    console.log("Apellido: ", apellido);
    console.log("Edad: ", edad);

    //SE PUEDE VERIFICAR QUE SE ESTEN ENVIANDO TODOS LOS PARAMETROS
    if (!nombre || !apellido || !edad) {
        return res.status(400).send("Faltan enviar algunos parametros ")
    }
});

//ES MUY IMPORTANTE EXPORTAR PORQUE SINO NO VA A FUNCIONAR
module.exports = router;
//EN EL INDEX ES MUY IMPORTANTE REQUERIR EL ARCHIVO
/*
ADEMAS HAY QUE HACER UN TIPO MIDLEWARE AL FINAL DE LA APP CASI QUE HAGA ESTO:

app.use('/users, users);

ESTO LO QUE HACE ES DECIRLE QUE TODO LO QUE TIENE /USER VAYA A USERS.JS
*/
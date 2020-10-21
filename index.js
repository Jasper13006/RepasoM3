//4) para crear el servidor primero tenemos que requerir el modulo express
const express = require('express');
//5) creamos una aplicacion para crear el servidor
const app = express();
//6) lo ponemos a escuchar
const morgan = require('morgan');
//morgan es un midleware(next()), mas comppleto
var fs = require('fs')
var usuarios = [{ nombre: "Ariel", apellido: "Lizarraga", edad: "19" }, { nombre: "Otra persona", apellido: "Caaaa", edad: "26" }]
var bodyParser = require('body-parser');
var users = require('./routes/users');
var saludo = require('./routes/saludo');

//7) CREAR LOS PEDIDOS

app.use(morgan('dev'));
app.use(bodyParser.json());

// app.use((req, res, next) => {
//     console.log(req.method + " " + req.url)
//     next();
// })


app.get('/', (req, res) => {//siempre recibe req y res, el primer parameto es la url
    res.send('Bienvenido');
})


//PARA MANDAR ALGO POR HTML
//HAY QUE REQUERIR FILESISTEM 
//VAR FS = REQUIRE('FS')
app.get('/html', (req, res) => {
    fs.readFile('./prueba.html', 'utf8', function (err, data) {
        if (err) throw error
        res.send(data);
    })
})

// app.get('/rutaloquesea/:esto',(req,res,)=>{
// const esto = req.params.esto;
// console.log(esto);
// const suma = esto + 50
// })

//PARA RECIBIR DATOS DENTRO DE LA URL SE PONEN LOS DOS PUNTOS PARA QUE SEPA QUE AHI LE VAN A ESCRIBIR ALGO
//PARA OBTENER EL VALOR DE LA URL ES: REQ.PARAMS.NOMBRE



//PARA RECIBIR DATOS COMO QUERY PARAMETER  SE HACE REQ.QUERY.NOMBRE
//PARA QUE RECIBA LSO DATOS CUADO ESCRIBIMOS LA DIRECCION EN EL BROWSER SE DEBEN ESCRIBIR LAS PROPIEDADES DESPUES DE UN SIGNO DE PREGUNTA
//Y SI SON MAS DE UNA SE LAS DEBE COMBINAR CON UN & (EJ: localhost:3000/user?nombre=Arie&edad=26)
//IR A USER.JS
app.use('/users', users);
app.use('/saludo', saludo);
app.listen(3337);
//?!todas las lineas anteriores son para configurar express
//GET
//POST
//PUT
//DELETE

//las tres distintas formas que se puede pasar información
/*
1)Directamente dentro de la url (EJ:/SALUDO/FRANCO O SALUDO/TONI)
2)QUE LO PASE COMO QUERY PARAMETER, QUE LO PASE COMO STRING (EJ: /USER?NOMBRE=FRANCO&EDAD=25)
3) POR BODY (EJ: /USER {NOMBRE: FRANCO, APELLIDO"bLA BLA BLA"})
PARA LA TERCERA HAY QUE PASAR UN JSON
*/

//ES IMPORTATNTE QUE SEPAREMOS LASFUCIONES EN OTROS NUEVOS ARCHIVOS ASÍ ES MAS ORDENADO
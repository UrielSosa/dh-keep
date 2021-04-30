const express = require('express');
const path = require('path')
const app = express();

/*Funcion extra para archivos*/
const pathComplete = (route) => path.resolve(__dirname, route) ;


/* Configuraciones */
app.use(express.static(path.resolve(__dirname, './public')));


app.get('/', (req, res) => {
    res.sendFile(pathComplete('views/index.html'));
})


app.listen(3000, () => console.log('http://localhost:3000'))
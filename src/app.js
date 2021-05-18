const express = require('express');
const app = express();
const path = require('path');

/* Configuraciones de ejs */
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

/* Configuraciones de la aplicación */
app.use(express.static(path.resolve(__dirname, '../public')));


/* ROUTES */
const mainRouter = require('./routes/main');

app.use('/', mainRouter);


/* SERVER */
app.listen(3000, () => console.log('http://localhost:3000'))
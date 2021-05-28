const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');


/* Configuraciones de ejs */
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

/* Configuraciones de la aplicación */
app.use(express.static(path.resolve(__dirname, '../public')));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }))
app.use(express.json());


/* ROUTES */
const mainRouter = require('./routes/main');
const notesRouter = require('./routes/notes');
const usersRouter = require('./routes/users');

app.use('/', mainRouter);
app.use('/notes', notesRouter);
app.use('/users', usersRouter);

/* SERVER */
app.listen(3000, () => console.log('http://localhost:3000'))
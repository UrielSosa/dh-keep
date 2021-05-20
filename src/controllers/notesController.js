const fs = require('fs');
const path = require('path');


let notes = fs.readFileSync(path.resolve(__dirname, '../database/notes.json'), 'utf-8');
    notes = JSON.parse(notes);


module.exports = {
    index: function (req, res) {
        res.render('notes/index', { notes });
    },
    show: function (req, res) {
        res.render('notes/detail');
    },
    edit: function (req, res) {
        res.render('notes/edit');
    },
    update: function (req, res) {
        res.send('Logica de actualizacion');
    },
    create: function (req, res) {
        res.render('notes/create');
    },
    store: function (req, res) {
        res.send(req.body);
    },
    destroy: function (req, res) {
        res.send('Logica de eliminar');
    }
}
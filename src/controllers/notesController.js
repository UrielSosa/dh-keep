const fs = require('fs');
const path = require('path');
const {readJson, lastId, writeJson} = require('./helpers');

module.exports = {
    index: function (req, res) {
        let notes = readJson('notes.json');
        res.render('notes/index', { notes });
    },
    show: function (req, res) {
        let notes = readJson('notes.json');
        let note = notes.find(note => note.id == req.params.id);
        res.render('notes/detail', { note });
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
        //console.log(req.file); //acá llega la info de upload.single()
        //console.log(req.files); //acá llega la info de upload.any()
        let notes = readJson('notes.json');
        let note = {
            id: lastId('notes.json') + 1,
            ...req.body,
            image: req.file.filename
        }

        notes.push(note);

        writeJson('notes.json', notes);

        return res.redirect('/notes');
    },
    destroy: function (req, res) {
        let notes = readJson('notes.json');

        let notesNew = notes.filter(note => note.id != req.params.id)
        
        writeJson('notes.json', notesNew);
        
        res.redirect('/notes');
    }
}
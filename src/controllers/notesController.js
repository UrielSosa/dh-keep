const fs = require('fs');
const path = require('path');

let notes = fs.readFileSync(path.resolve(__dirname, '../database/notes.json'), 'utf-8');
    notes = JSON.parse(notes);

const lastId = () => {
    let ultimo = 0;
    notes.forEach(note => {
        if (ultimo < note.id) {
            ultimo = note.id;
        }
    });
    return ultimo;
}

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
        //console.log(req.file); //acá llega la info de upload.single()
        //console.log(req.files); //acá llega la info de upload.any()
        
        let note = {
            id: lastId() + 1,
            ...req.body,
            image: req.file.filename
        }

        notes.push(note);

        let notesJson = JSON.stringify(notes, null, 4);
        
        fs.writeFileSync(path.resolve(__dirname, '../database/notes.json'), notesJson);

        return res.redirect('/notes');
    },
    destroy: function (req, res) {
        
        let notesNew = notes.filter(note => note.id != req.params.id)
        
        notesNew = JSON.stringify(notesNew, null, 4);
        
        fs.writeFileSync(path.resolve(__dirname, '../database/notes.json'), notesNew);
        
        res.redirect('/notes');
    }
}
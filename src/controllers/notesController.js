
module.exports = {
    index: function (req, res) {
        res.render('index');
    },
    show: function (req, res) {
        res.send('detalle de una nota');
    },
    edit: function (req, res) {
        res.send('Vista para editar una nota');
    },
    update: function (req, res) {
        res.send('Logica de actualizacion');
    },
    create: function (req, res) {
        res.send('Vista para crear una nota');
    },
    store: function (req, res) {
        res.send(req.body);
    },
    destroy: function (req, res) {
        res.send('Logica de eliminar');
    }
}
let celulares = [
    {
        name: 'Motorola Moto E6 Plus',
        price: 14999
    },
    {
        name: 'Motorola G7',
        price: 19999
    },
    {
        name: 'Alcatel 5033A',
        price: 6999
    },
    {
        name: 'Samsung Galaxy A50',
        price: 33499
    }
]

module.exports = {
    home (req, res) {
        res.render('index', {celulares});
    }
}
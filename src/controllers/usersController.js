module.exports = {
    register (req, res) {
        res.render('users/register');
    },
    login (req, res) {
        res.render('users/login');
    }
}
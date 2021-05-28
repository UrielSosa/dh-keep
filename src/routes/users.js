const express = require('express');
const path = require('path');
const multer = require('multer');

const router = express.Router();
const controller = require('../controllers/usersController');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '../../public/img/profile'))
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
   
  var upload = multer({ storage: storage })



router.get('/register', controller.register);
router.get('/login', controller.login);

router.post('/register', controller.register);
router.post('/login', controller.login);

module.exports = router;
const express = require('express');
const path = require('path');
const multer = require('multer');

const router = express.Router();
const controller = require('../controllers/notesController');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '../../public/img/notes'))
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
   
  var upload = multer({ storage: storage })



router.get('/', controller.index);
router.get('/create', controller.create); //vista
router.get('/:id', controller.show);
router.get('/:id/edit', controller.edit); //vista

router.put('/:id', controller.update); //logica

router.post('/', upload.single('image'), controller.store); //Acá agregamos multer

router.delete('/:id', controller.destroy); //logica


module.exports = router;
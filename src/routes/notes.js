const express = require('express');
const router = express.Router();
const controller = require('../controllers/notesController');

router.get('/', controller.index);
router.get('/create', controller.create); //vista
router.get('/:id', controller.show);
router.get('/:id/edit', controller.edit); //vista

router.put('/:id', controller.update); //logica
router.post('/', controller.store); //logica
router.delete('/:id', controller.destroy); //logica


module.exports = router;
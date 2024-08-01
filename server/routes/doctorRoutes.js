const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');

router.post('/', doctorController.createDoctor);
router.get('/', doctorController.getDoctors);
router.get('/:id', doctorController.getDoctorById);
router.put('/:id', doctorController.update);

module.exports = router;

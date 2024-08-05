import express from 'express';
const router = express.Router();
import doctorController from '../controllers/doctorController.js';
router.post('/', doctorController.createDoctor);
router.get('/', doctorController.getDoctors);
router.get('/:id', doctorController.getDoctorById);
router.put('/:id', doctorController.update);

export default router;

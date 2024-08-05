import express from 'express';
const router = express.Router();
import {
    createDoctor,
    getDoctors,
    getDoctorById,
    updateDoctor,
    deleteDoctor
} from '../controllers/doctorController.js';router.post('/', doctorController.createDoctor);

router.post('/', createDoctor);
router.get('/', getDoctors);
router.get('/:id', getDoctorById);
router.put('/:id', updateDoctor);
router.delete('/:id', deleteDoctor);

export default router;

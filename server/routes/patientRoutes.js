import express from 'express';
const router = express.Router();
import {
    createPatient,
    getPatients,
    getPatientById,
    updatePatient,
    deletePatient
} from '../controllers/patientController.js';

router.post('/', createPatient);
router.get('/', getPatients);
router.get('/:id', getPatientById);
router.put('/:id', updatePatient);
router.delete('/:id', deletePatient);

export default router;

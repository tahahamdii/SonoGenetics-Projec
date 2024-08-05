import express from 'express';
import {
    createTreatment,
    getTreatments,
    getTreatmentById,
    updateTreatment,
    deleteTreatment
} from '../controllers/treatmentController.js'; 

const router = express.Router();

router.post('/', createTreatment);
router.get('/', getTreatments);
router.get('/:id', getTreatmentById);
router.put('/:id', updateTreatment);
router.delete('/:id', deleteTreatment);

export default router;

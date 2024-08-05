import express from 'express';
const router = express.Router();
import treatmentController from '../controllers/treatmentController.js';
router.post('/', treatmentController.createTreatment);
router.get('/', treatmentController.getTreatments);
router.get('/:id', treatmentController.getTreatmentById);
router.put('/:id', treatmentController.updateTreatment);
router.delete('/:id', treatmentController.deleteTreatment);
export default router;

import express from 'express';
const router = express.Router();
import medicalReportController from '../controllers/medicalReportController.js';
router.post('/', medicalReportController.createMedicalReport);
router.get('/', medicalReportController.getMedicalReports);
router.get('/:id', medicalReportController.getMedicalReportById);
router.put('/:id', medicalReportController.updateMedicalReport);
router.delete('/:id', medicalReportController.deleteMedicalReport);

export default router;

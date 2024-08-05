import express from 'express';
const router = express.Router();
import {
    createMedicalReport,
    getMedicalReports,
    getMedicalReportById,
    updateMedicalReport,
    deleteMedicalReport
} from '../controllers/medicalReportController.js';router.post('/', medicalReportController.createMedicalReport);
router.get('/', getMedicalReports);
router.get('/:id', getMedicalReportById);
router.put('/:id', updateMedicalReport);
router.delete('/:id', deleteMedicalReport);

export default router;

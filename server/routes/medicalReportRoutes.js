const express = require('express');
const router = express.Router();
const medicalReportController = require('../controllers/medicalReportController');

router.post('/', medicalReportController.createMedicalReport);
router.get('/', medicalReportController.getMedicalReports);
router.get('/:id', medicalReportController.getMedicalReportById);
router.put('/:id', medicalReportController.updateMedicalReport);
router.delete('/:id', medicalReportController.deleteMedicalReport);

module.exports = router;

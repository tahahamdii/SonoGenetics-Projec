import express from 'express';
import { createDetection, getDetections, getDetectionById, updateDetection, deleteDetection } from '../controllers/detectionController.js';

const router = express.Router();

router.post('/', createDetection);
router.get('/', getDetections);
router.get('/:id', getDetectionById);
router.put('/:id', updateDetection);
router.delete('/:id', deleteDetection);

export default router;

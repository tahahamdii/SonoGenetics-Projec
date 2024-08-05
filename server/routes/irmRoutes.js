import express from 'express';
import { createImage, getImages, getImageById, updateImage, deleteImage } from '../controllers/irmController.js';
import multer from 'multer';

const router = express.Router();
const upload = multer(); // Using multer for handling file uploads

router.post('/', upload.single('file'), createImage);
router.get('/', getImages);
router.get('/:id', getImageById);
router.put('/:id', updateImage);
router.delete('/:id', deleteImage);

export default router;

import Irm from '../models/Irm.js';
import cloudinary from '../utils/cloudinary.js';
import upload from '../middelwares/multer.js';
import express from 'express';
export const createImage = async (req, res) => {
    try {
        const image = new Irm({
            file: req.file.buffer, 
            date: req.body.date,
            tumor_location: req.body.tumor_location || null,
            tumor_size: req.body.tumor_size || null
        });
        await image.save();
        res.status(201).send(image);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const getImages = async (req, res) => {
    try {
        const images = await Irm.find();
        res.status(200).send(images);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const getImageById = async (req, res) => {
    try {
        const image = await Irm.findById(req.params.id);
        if (!image) {
            return res.status(404).send();
        }
        res.status(200).send(image);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const updateImage = async (req, res) => {
    try {
        const updates = Object.keys(req.body);
        const image = await Irm.findById(req.params.id);
        if (!image) {
            return res.status(404).send();
        }

        updates.forEach(update => image[update] = req.body[update]);
        await image.save();
        res.status(200).send(image);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const deleteImage = async (req, res) => {
    try {
        const image = await Irm.findByIdAndDelete(req.params.id);
        if (!image) {
            return res.status(404).send();
        }
        res.status(200).send(image);
    } catch (error) {
        res.status(500).send(error);
    }
};
export const getImagesByTumorLocation = async (req, res) => {
    try {
        const { location } = req.params;
        const images = await Irm.find({ tumor_location: location });
        res.status(200).send(images);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const getImagesByTumorSizeRange = async (req, res) => {
    try {
        const { minSize, maxSize } = req.params;
        const images = await Irm.find({ tumor_size: { $gte: minSize, $lte: maxSize } });
        res.status(200).send(images);
    } catch (error) {
        res.status(500).send(error);
    }
};

const router = express.Router();

router.post('/upload', upload.single('image'), (req, res) => {
  cloudinary.uploader.upload(req.file.path, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: false,
        message: err.message
        });
    }

    res.status(200).json({
      success: true,
      message: "Uploaded!",
      data: result
    });
  });
});

export default router;
        
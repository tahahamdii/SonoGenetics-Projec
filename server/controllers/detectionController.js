import Detection from '../models/Detection.js';

export const createDetection = async (req, res) => {
    try {
        const detection = new Detection(req.body);
        await detection.save();
        res.status(201).send(detection);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const getDetections = async (req, res) => {
    try {
        const detections = await Detection.find();
        res.status(200).send(detections);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const getDetectionById = async (req, res) => {
    try {
        const detection = await Detection.findById(req.params.id);
        if (!detection) {
            return res.status(404).send();
        }
        res.status(200).send(detection);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const updateDetection = async (req, res) => {
    try {
        const detection = await Detection.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!detection) {
            return res.status(404).send();
        }
        res.status(200).send(detection);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const deleteDetection = async (req, res) => {
    try {
        const detection = await Detection.findByIdAndDelete(req.params.id);
        if (!detection) {
            return res.status(404).send();
        }
        res.status(200).send(detection);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const getDetectionsBySeanceId = async (req, res) => {
    try {
        const { treatmentId } = req.params;
        const detections = await Detection.find({ treatment: treatmentId });
        res.status(200).send(detections);
    } catch (error) {
        res.status(500).send(error);
    }
};
export const getDetectionsByDateRange = async (req, res) => {
    try {
        const { startDate, endDate } = req.params;
        const detections = await Detection.find({ createdAt: { $gte: startDate, $lte: endDate } });
        res.status(200).send(detections);
    } catch (error) {
        res.status(500).send(error);
    }
};


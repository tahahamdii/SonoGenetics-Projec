const Treatment = require('../models/Treatment');

exports.createTreatment = async (req, res) => {
    try {
        const treatment = new Treatment(req.body);
        await treatment.save();
        res.status(201).send(treatment);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getTreatments = async (req, res) => {
    try {
        const treatments = await Treatment.find();
        res.status(200).send(treatments);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getTreatmentById = async (req, res) => {
    try {
        const treatment = await Treatment.findById(req.params.id);
        if (!treatment) {
            return res.status(404).send();
        }
        res.status(200).send(treatment);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updateTreatment = async (req, res) => {
    try {
        const treatment = await Treatment.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!treatment) {
            return res.status(404).send();
        }
        res.status(200).send(treatment);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.deleteTreatment = async (req, res) => {
    try {
        const treatment = await Treatment.findByIdAndDelete(req.params.id);
        if (!treatment) {
            return res.status(404).send();
        }
        res.status(200).send(treatment);
    } catch (error) {
        res.status(500).send(error);
    }
};

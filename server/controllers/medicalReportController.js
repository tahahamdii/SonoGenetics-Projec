const MedicalReport = require('../models/MedicalReport');

exports.createMedicalReport = async (req, res) => {
    try {
        const report = new MedicalReport(req.body);
        await report.save();
        res.status(201).send(report);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getMedicalReports = async (req, res) => {
    try {
        const reports = await MedicalReport.find();
        res.status(200).send(reports);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getMedicalReportById = async (req, res) => {
    try {
        const report = await MedicalReport.findById(req.params.id);
        if (!report) {
            return res.status(404).send();
        }
        res.status(200).send(report);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updateMedicalReport = async (req, res) => {
    try {
        const report = await MedicalReport.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!report) {
            return res.status(404).send();
        }
        res.status(200).send(report);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.deleteMedicalReport = async (req, res) => {
    try {
        const report = await MedicalReport.findByIdAndDelete(req.params.id);
        if (!report) {
            return res.status(404).send();
        }
        res.status(200).send(report);
    } catch (error) {
        res.status(500).send(error);
    }
};

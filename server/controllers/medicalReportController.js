import MedicalReport from '../models/MedicalReport.js';

export const createMedicalReport = async (req, res) => {
    try {
        const medicalReport = new MedicalReport(req.body);
        await medicalReport.save();
        res.status(201).send(medicalReport);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const getMedicalReports = async (req, res) => {
    try {
        const medicalReports = await MedicalReport.find();
        res.status(200).send(medicalReports);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const getMedicalReportById = async (req, res) => {
    try {
        const medicalReport = await MedicalReport.findById(req.params.id);
        if (!medicalReport) {
            return res.status(404).send();
        }
        res.status(200).send(medicalReport);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const updateMedicalReport = async (req, res) => {
    try {
        const medicalReport = await MedicalReport.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!medicalReport) {
            return res.status(404).send();
        }
        res.status(200).send(medicalReport);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const deleteMedicalReport = async (req, res) => {
    try {
        const medicalReport = await MedicalReport.findByIdAndDelete(req.params.id);
        if (!medicalReport) {
            return res.status(404).send();
        }
        res.status(200).send(medicalReport);
    } catch (error) {
        res.status(500).send(error);
    }
};

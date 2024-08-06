import Patient from '../models/Patient.js';

import MedicalReport from '../models/MedicalReport.js';

export const createPatient = async (req, res) => {
    try {
        const { name, age, gender, address, contact, medicalReportdata } = req.body;

        const medicalReport = new MedicalReport(medicalReportdata);
        await medicalReport.save();

        const patient = new Patient({
            name,
            age,
            gender,
            address,
            contact,
            medicalReport: medicalReport._id
        });
        await patient.save();

        res.status(201).send(patient);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const getPatients = async (req, res) => {
    try {
        const patients = await Patient.find();
        res.status(200).send(patients);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const getPatientById = async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.id);
        if (!patient) {
            return res.status(404).send();
        }
        res.status(200).send(patient);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const updatePatient = async (req, res) => {
    try {
        const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!patient) {
            return res.status(404).send();
        }
        res.status(200).send(patient);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const deletePatient = async (req, res) => {
    try {
        const patient = await Patient.findByIdAndDelete(req.params.id);
        if (!patient) {
            return res.status(404).send();
        }
        res.status(200).send(patient);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const getPatientsByAgeRange = async (req, res) => {
    try {
        const { minAge, maxAge } = req.params;
        const patients = await Patient.find({ age: { $gte: minAge, $lte: maxAge } });
        res.status(200).send(patients);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const getPatientsByGender = async (req, res) => {
    try {
        const { gender } = req.params;
        const patients = await Patient.find({ gender });
        res.status(200).send(patients);
    } catch (error) {
        res.status(500).send(error);
    }
};


import Doctor from '../models/Doctor.js';

export const createDoctor = async (req, res) => {
    try {
        const doctor = new Doctor(req.body);
        await doctor.save();
        res.status(201).send(doctor);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const getDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find();
        res.status(200).send(doctors);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const getDoctorById = async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.params.id);
        if (!doctor) {
            return res.status(404).send();
        }
        res.status(200).send(doctor);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const updateDoctor = async (req, res) => {
    try {
        const doctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!doctor) {
            return res.status(404).send();
        }
        res.status(200).send(doctor);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const deleteDoctor = async (req, res) => {
    try {
        const doctor = await Doctor.findByIdAndDelete(req.params.id);
        if (!doctor) {
            return res.status(404).send();
        }
        res.status(200).send(doctor);
    } catch (error) {
        res.status(500).send(error);
    }
};
export const getDoctorsBySpecialty = async (req, res) => {
    try {
        const { specialty } = req.params;
        const doctors = await Doctor.find({ specialty });
        res.status(200).send(doctors);
    } catch (error) {
        res.status(500).send(error);
    }
};


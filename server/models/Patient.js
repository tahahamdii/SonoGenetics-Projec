import mongoose from 'mongoose';
const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    contact: {
        type: String,
        required: true,
        trim: true
    },
    medicalReport: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MedicalReport'
    }
}, {
    timestamps: true
});

const Patient = mongoose.model('Patient', patientSchema);

export default Patient;
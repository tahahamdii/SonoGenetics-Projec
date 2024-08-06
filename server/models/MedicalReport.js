import mongoose from 'mongoose';
const medicalReportSchema = new mongoose.Schema({
    
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor'
    },
    diagnosis: {
        type: String,
        required: false,
        trim: true
    },
    treatment: {
        type: String,
        required: false,
        trim: true
    },
    date: {
        type: Date,
        required: false
    }
}, {
    timestamps: true
});

const MedicalReport = mongoose.model('MedicalReport', medicalReportSchema);

export default MedicalReport;
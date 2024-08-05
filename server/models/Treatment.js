import mongoose from 'mongoose';
const treatmentSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    id_mage: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'MedicalReport'
    },
    frequency: {
        type: String,
        required: true,
        trim: true
    },
    intensity: {
        type: String,
        required: true,
        trim: true
    },
    duration: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true
});

const Treatment = mongoose.model('Treatment', treatmentSchema);

export default Treatment;
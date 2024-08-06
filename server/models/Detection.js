import mongoose from 'mongoose';

const detectionSchema = new mongoose.Schema({
    seance: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Treatement' 
    },
    date: {
        type: Date,
        required: true
    },
    id_Image: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Irm' 
    },
    frenquence_sonoporation: {
        type: String,
        required: true,
        trim: true
    },
    intensité_sonoporation: {
        type: String,
        required: true,
        trim: true
    },
    frequence_impultion: {
        type: String,
        required: true,
        trim: true
    },
    intensité_impultion: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true
});

const Detection = mongoose.model('Detection', detectionSchema);

export default Detection;

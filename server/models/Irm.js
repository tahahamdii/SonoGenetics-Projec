import mongoose from 'mongoose';

const irmSchema = new mongoose.Schema({
    file: {
        type: Buffer,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    tumor_location: {
        type: String,
        default: null,
        trim: true
    },
    tumor_size: {
        type: String,
        default: null,
        trim: true
    }
}, {
    timestamps: true
});

const Irm = mongoose.model('Irm', irmSchema);

export default Image;

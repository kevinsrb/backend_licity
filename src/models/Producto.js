import { Schema, model } from 'mongoose'

const Product = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    vat: {
        type: Number,
        required: true
    },
    value: {
        type: true,
        required: true
    }
}, {
    timestamps: true
});

export default model('producto', Product);

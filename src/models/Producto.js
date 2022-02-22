import { Schema, model } from 'mongoose'

const productSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    iva: {
        type: Number,
        required: true
    },
    valor: {
        type: true,
        required: true
    }
}, {
    timestamps: true
});

export default model('producto', productSchema);

import { Schema, model } from 'mongoose';


const Invoice = new Schema({
    total_value: {
        type: Number,
        required: true
    },
    total_vat: {
        type: Number,
        required: true
    },
    products: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Producto',
    },
    paid: {
        type: Boolean,
        required: true
    }
}, {
    timestamps: true
});

export default model('invoice', Invoice);

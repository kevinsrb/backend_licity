import { Schema, model } from 'mongoose';


const facturaSchema = new Schema({
    valor_total: {
        type: Number,
        required: true
    },
    iva_total: {
        type: Number,
        required: true
    },
    productos: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Producto',
    },
    pagada: {
        type: Boolean,
        required: true
    }
}, {
    timestamps: true
});

export default model('factura', facturaSchema);

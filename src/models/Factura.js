import { Schema, model } from 'mongoose';


const facturaSchema = new Schema({
    valor_total: Number,
    iva_total: Number,
    productos: {
        type: Schema.Types.ObjectId,
        ref: 'Producto',
    },
    pagada: Boolean
}, {
    timestamps: true
});

module.exports = model('Factura', facturaSchema, 'facturas');
import { Schema, model } from 'mongoose'

const productSchema = new Schema({
    nombre: String,
    iva: Number,
    valor: Number
}, {
    timestamps: true
});

module.exports = model('Producto', productSchema, 'productos');
import express, { json } from "express";
import morgan from "morgan";
import cors from 'cors';
import './database'
import * as dotenv from 'dotenv';
import Invoice from './models/Invoice';
dotenv.config();

import usersRoutes from './routes/users.routes'

//  APP
const app = express();

// MIDDLEWARES
app.use(morgan('dev'));
app.use(json());
app.use(cors())

// ROUTES
app.use('/api/user', usersRoutes);

app.get('/invoice', (req, res) => {
    const invoice = Invoice.find().then((data) => {
        res.json(data)
    }).catch((error) => {
        res.json({message: error})
    })
})

app.get('/invoiceByID/:id', (req, res) => {
    const { id } = req.params
    const invoice = Invoice.findById(id).then((data) => {
        res.json(data)
    }).catch((error) => {
        res.json({message: error})
    })
})

app.post('/invoice', (req, res) =>{
    const invoice = Invoice(req.body);
    invoice.save().then((data) => {
        res.json(data)
    }).catch((error) => {
        res.json({message: error})
    })
})

app.put('/invoice/:id', (req, res) => {
    const { id } = req.params;
    const {total_value, total_vat, products, paid} = req.body
    Invoice.updateOne({_id: id}, {$set: {total_value, total_vat, products, paid}})
    .then((data) => {
        res.json(data)
    }).catch((error) => {
        res.json({message: error})
    })
})

app.delete('/invoice/:id', (req, res) => {
    const { id } = req.params
    Invoice.remove({_id: id}).then((data) => {
        res.json(data)
    }).catch((error) => {
        res.json({message: error})
    })
})

export default app;

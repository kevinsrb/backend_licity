import express, { json } from "express";
import morgan from "morgan";
import cors from 'cors';
import './database'
import * as dotenv from 'dotenv';
dotenv.config();

import usersRoutes from './routes/users.routes'


//  APP
const  app = express();

// MIDDLEWARES
app.use(morgan('dev'));
app.use(json());
app.use(cors())

// ROUTES

app.use('/api/user', usersRoutes);


export default app;

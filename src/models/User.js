import { Schema, model } from 'mongoose'

const User = new Schema({
    email: String,
    password: String
}, {
    timestamps: true
});

export default model('user', User);

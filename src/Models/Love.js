import mongoose, { mongo } from 'mongoose';

const LoveSchema = mongoose.Schema({
    url: String,
    message: String,
});

const model = mongoose.Model('Love', LoveSchema);

export default model;

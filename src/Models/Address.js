import mongoose from 'mongoose';

cosnt AddressSchema = mongoose.Schema({
    address: String
});

const model = mongoose.Model('Address',AddressSchema);

export default model;
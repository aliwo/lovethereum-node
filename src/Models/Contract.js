import mongoose from 'mongoose';

const ContractSchema = mongoose.Schema({
    address: String,
    abi: String,
    version: String,
});

const model = mongoose.Model('Address', ContractSchema);

export default model;

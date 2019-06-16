import mongoose from 'mongoose';

const ContractSchema = mongoose.Schema({
    address: String,
    abi: Object,
    version: String,
});

const model = mongoose.model('Contract', ContractSchema);

export default model;

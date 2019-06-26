import mongoose from 'mongoose';

const LoveSchema = mongoose.Schema({
    url: String,
    message: String,
    status: String, // PENDING, SUCCESS 이 있습니다. 블록체인 등록에 성공하면 SUCCESS 입니다.
});

const model = mongoose.model('Love', LoveSchema);

export default model;

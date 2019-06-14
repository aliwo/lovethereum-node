import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGO_URL || 'mongodb://localhost/lovethereum';

mongoose.connect(uri, {
    useNewUrlParser: true,
    useFindAndModify: false,
});

const db = mongoose.connection;

const handleError = error => console.log(`error: ${error}`);
const handleOpen = () => console.log('DB Connected');

db.on('error', handleError);
db.once('open', handleOpen);

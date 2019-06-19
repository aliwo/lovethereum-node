import dotenv from 'dotenv';
import app from './ExpressApp';

dotenv.config();

const port = process.env.PORT || 4000;

const handleListen = () => {
    console.log(`Listening On : http://localhost:${port}`);
};

app.listen(port, handleListen);

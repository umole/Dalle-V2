import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import connectDB from './mongodb/connect.js';
import postRoute from './routes/post.route.js';
import dalleRoute from './routes/dalle.route.js';

dotenv.config();

const app = express();
app.use(express.json({limit: '50mb'}));
app.use('/api/vi/post', postRoute);
app.use('/api/vi/dalle', dalleRoute);

app.get('/', (req, res) => {
    res.send('Hello Bitch!');
})

function startServer() {
    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(3000, () => {
            console.log('Server is listening on port 3000');
        });
    } catch (error) {
        console.log(error);
    }

    
}

startServer();
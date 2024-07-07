import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/userRoute.js'
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors())
dotenv.config();

app.use('/users', userRouter);

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    })
})
.catch(error => {s
    console.log(error.message);
});




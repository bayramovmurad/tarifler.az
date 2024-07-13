import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { UserModel } from '../models/userModel.js';

dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;

const receipeUserMiddleware = async (req, res, next) => {
    const authHeader = req.header('Authorization');

    if (!authHeader) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    const token = authHeader.replace('Bearer ', '');

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded;

        const user = await UserModel.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }
        next();
    } catch (error) {
        res.status(400).json({ message: 'Invalid token.' });
    }
};

export default receipeUserMiddleware;

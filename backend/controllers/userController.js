import { UserModel } from "../models/userModel.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;

export const getUsers = async (req, res) => {
    const allUsers = await UserModel.find();
    return res.status(200).json({ allUsers });
}

export const deleteUser = async(req,res) => {
    const { id } = req.params;
    const user = await UserModel.findByIdAndDelete(id);
    return res.status(200).json({ user });
}

export const addUserRegister = async (req, res) => {
    const { username, password, role } = req.body;
    const user = await UserModel.findOne({ username });
    if (user) {
        return res.status(400).json({ message: "Username already exists" });
    }
    if (password.length < 6) {
        return res.status(400).json({ message: "Password must be at least 6 characters" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({ username, password: hashedPassword, role: role || 'user' });

    await newUser.save();
    const token = jwt.sign({ id: newUser.id, role: newUser.role }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ message: "User registered successfully", token });
};

export const addUserLogin = async (req, res) => {
    const { username, password } = req.body;
    const user = await UserModel.findOne({ username });
    if (!user) {
        return res.status(400).json({ message: "Username does not exist" });
    };

    const validationPassword = await bcrypt.compare(password, user.password);
    if (!validationPassword) {
        return res.status(400).json({ message: "Invalid username and password" });
    };
    const token = jwt.sign({ id: user.id, role:user.role }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ message: "User logged in successfully", token });
}
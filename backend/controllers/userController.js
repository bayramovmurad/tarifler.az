import { UserModel } from "../models/userModel.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;

// ! admin

export const getUsersAdmin = async (req, res) => {
    const allUsers = await UserModel.find();
    return res.status(200).json({ allUsers });
}

export const deleteUserAdmin = async(req,res) => {
    const { id } = req.params;
    const user = await UserModel.findByIdAndDelete(id);
    return res.status(200).json({ user });
}




// ! user

export const getUser = async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await UserModel.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json({ user });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

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
};


export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedUser = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json(updatedUser);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await UserModel.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json({ message: "User deleted successfully", user });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};


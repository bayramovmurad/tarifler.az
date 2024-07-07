import express from 'express';
import { addUserLogin, addUserRegister, deleteUser, getUsers } from '../controllers/userController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', addUserRegister);
router.post('/login', addUserLogin);
router.get('/get-users', authMiddleware, getUsers);
router.delete('/delete-users/:id', authMiddleware, deleteUser);

export default router;
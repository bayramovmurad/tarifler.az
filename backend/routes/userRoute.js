import express from 'express';
import { addUserLogin, addUsersRegister, deleteUsers, getUsers } from '../controllers/userController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', addUsersRegister);
router.post('/login', addUserLogin);
router.get('/get-users', authMiddleware, getUsers);
router.delete('/delete-users/:id', authMiddleware, deleteUsers);

export default router;
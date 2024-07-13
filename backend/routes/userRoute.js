import express from 'express';
import { addUserLogin, addUserRegister, deleteUser, deleteUserAdmin, getUser, getUsersAdmin, updateUser } from '../controllers/userController.js';
import authMiddleware from '../middleware/authMiddleware.js';
import tokenVerify from '../middleware/tokenVerify.js';

const router = express.Router();

// ! admin route
router.get('/admin/get-users', authMiddleware, getUsersAdmin);
router.delete('/admin/delete-user/:id', authMiddleware, deleteUserAdmin);

// ! user route
router.post('/register', addUserRegister);
router.post('/login', addUserLogin);
router.get('/profile', tokenVerify, getUser);
router.delete('/delete/:id', deleteUser);
router.put('/update/:id', updateUser);

export default router;

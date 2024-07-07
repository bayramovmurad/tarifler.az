import express from 'express';
import { addUserLogin, addUsersRegister, getUsers } from '../controllers/userController.js';

const router = express.Router();

router.post('/register',addUsersRegister);
router.post('/login', addUserLogin);
router.get('/allusers', getUsers);
export default router;
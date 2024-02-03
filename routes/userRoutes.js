import express from 'express';
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from '../controllers/userController.js';
import { admin, protect } from '../middleware/authMiddleWare.js';

const router = express.Router();

router.route('/').post(registerUser).get(protect, admin,getUsers);
router.post('/auth', authUser);
router.post('/login', authUser);
router.post('/logout', logoutUser);
router
  .route('/profile')
  .get( getUserProfile)
  .put(protect, updateUserProfile);
router
  .route('/:id')
  .delete(  deleteUser)
  .get(  getUserById)
  .put( updateUser);

export default router;
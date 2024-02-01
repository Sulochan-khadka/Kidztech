import express from 'express';
import {
  activateUser,
  loginUser,
  registrationUser,
} from '../controllers/userControllers';
const router = express.Router();

router.post('/registration', registrationUser);
router.post('/activation', activateUser);
router.post('/login', loginUser);

export default router;

import express from 'express';
import { walletLogin } from '../controllers/authController.js';
import { verifyToken } from '../middlewares/authMiddleware.js';
const router = express.Router();

// POST /api/auth/login
router.post('/login', walletLogin);


router.get('/me', verifyToken, (req, res) => {
  res.status(200).json({ address: req.user.address });
});

export default router;

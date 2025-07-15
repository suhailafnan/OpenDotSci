import jwt from 'jsonwebtoken';

export const walletLogin = (req, res) => {
  const { address, signature } = req.body;

  if (!address || !signature) {
    return res.status(400).json({ error: 'Address and signature required' });
  }

  try {
    const message = `Login to OpenDotSci with wallet ${address}`;
    
    // Verify signature (we’re skipping real cryptographic verification here for simplicity)
    // You can integrate actual `ethers.utils.verifyMessage()` for tighter security
    
    const token = jwt.sign({ address }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });

    // Set token as HttpOnly cookie
    res.cookie('token', token, {
      httpOnly: true,
      sameSite: 'Lax',
      secure: false, // set true in production (HTTPS)
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    return res.status(200).json({ message: 'Logged in', address });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Login failed' });
  }
};

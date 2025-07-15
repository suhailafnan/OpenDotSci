// import dotenv from 'dotenv';
// import path from 'path';

// Load the .env file from the parent folder (root)
// dotenv.config({ path: path.resolve(__dirname, '../.env') });

// // Now you can use environment variables
// console.log('JWT_SECRET:', process.env.JWT_SECRET);
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/authRoutes';

dotenv.config();
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

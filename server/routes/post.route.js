import express from 'express';
import * as dotenv from 'dotenv';
//import cloudinary from 'cloudinary';
import pkg from 'cloudinary';
const cloudinary = pkg.v2;


import PostSchema from '../mongodb/models/post.js';

dotenv.config();

const router = express.Router();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default router;
import express from 'express';
import * as dotenv from 'dotenv';
//import cloudinary from 'cloudinary';
import pkg from 'cloudinary';
const cloudinary = pkg.v2;


import PostSchema from '../mongodb/models/post.js';

dotenv.config();

const router = express.Router();
export default router;
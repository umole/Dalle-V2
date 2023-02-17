import express from 'express';
import * as dotenv from 'dotenv';
import { cloudinary } from 'cloudinary';

import PostSchema from '../mongodb/models/post';

dotenv.config();

const router = express.Router();
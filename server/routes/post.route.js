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

//GET ALL POSTS
router.get('/', async (req, res) => {
    try {
        const posts = await PostSchema.find({});

        res.status(200).json({success: true, data: posts});
    } catch (error) {
        res.status(500).json({success: false, message: error});
    }
});

//CREATE A POST
router.post('/', async(req, res) => {
    try {
        const {name, prompt, photo} = req.body;
        const photoUrl = await cloudinary.uploader.upload(photo);

        const newPost = await PostSchema.create({
        name,
        prompt,
        photo: photoUrl.url
        });

        res.status(201).json({success: true, data: newPost});
          
    } catch (error) {
        console.log(error);
    }
});



export default router;
import mongoose from 'mongoose';

const Post = new mongoose.Schema({
    name: String,
    prompt:String,
    photo: String
})

const PostSchema = mongoose.model('Post', Post);
export default PostSchema;
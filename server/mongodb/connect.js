import mongoose from 'mongoose';

function connectDB(url) {
    mongoose.set('strictQuery', true);

    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('MongoDB connected'))
        .catch(err => console.log(err));
}

export default connectDB;
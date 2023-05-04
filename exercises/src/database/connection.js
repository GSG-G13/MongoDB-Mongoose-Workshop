// Create Connection Here
import mongoose from 'mongoose';
import {} from 'dotenv/config';

const connection = () =>  mongoose.connect(process.env.DB_URI);

export default connection;
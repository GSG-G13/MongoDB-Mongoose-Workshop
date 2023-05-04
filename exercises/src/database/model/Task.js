// Create Schema & Model Here
import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  task: { type: String, required: true }
});

const taskM = mongoose.model('Tasks', taskSchema);

export default taskM;
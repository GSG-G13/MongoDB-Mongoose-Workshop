import mongoose from 'mongoose';
import taskM from '../database/model/Task.js';

const updateTask = async (req, res) =>{
  try {
    const {taskId } = req.params;
    const { task } = req.body;
    const newTasks = await taskM.updateOne({_id: taskId }, {task});
    res.status(201).json({
      error: false,
      tasks: newTasks
    })
    // Change Here
  } catch (error) {
    res.status(500).json({
      error: true,
      message: 'Internal Server Error'
    })  }
}

export default updateTask;
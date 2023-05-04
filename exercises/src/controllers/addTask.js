import taskM from '../database/model/Task.js'
const addTask = async (req, res) => {
  
  try {
    // Change Here
    const { task } = req.body;
    const newTask = await taskM.create({task})
    res.status(201).json({
      error: false,
      task: newTask
    })
  } catch (error) {
    // Change Here
    res.status(500).json({
      error: true,
      message: 'Internal Server Error'
    })
  };
};

export default addTask;

import taskM from '../database/model/Task.js';

const getTasks = async (req, res) => {
  try {
    const tasks = await taskM.find({})
    res.json({
      error: false,
      tasks
    })
  } catch (error) {
    res.status(500).json({
      error: true,
      message: 'Internal Server Error'
    })
  }
}

export default getTasks;
const express = require('express')
const router = express.Router()

const {getAllTasks,
    getTask, 
    createTask,
     } = require('../controllers/tasks')

router.route('/').get(getAllTasks).post(createTask)
router.route('/:city').get(getTask)


module.exports = router 
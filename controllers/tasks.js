const List = require('../models/Task')
const asyncWrapper = require('../middleware/async')




const getAllTasks = asyncWrapper( async (req, res) => { //passing the current controller as an argument in the asyncWrapper.
    const lists = await List.find({});
    res.status(200).json({ lists })
    // res.status(500).json({ msg: error })
})

const createTask = asyncWrapper( async (req, res) => { //post
    
    const list = await List.create(req.body)
    res.status(201).json({ list }) //whatever we are getting from the postman and then let's pass 
    //that object into Task.create //schema is on the models/Task and Task.create is on the 
    //controllers/tasks and then these instances of models are saved to the database. 
    // res.status(500).json({ msg: error }) // general server error
})

const getTask = asyncWrapper (async (req, res) => {
    
   const {city:cityName} = req.params
    const list = await List.find({city:cityName});
    if(!list){
        return res.status(404).json({msg:`no listing with city ${cityName}`})
    }
    res.status(200).json( { list })
   
});









module.exports = {
    getAllTasks,
    createTask, 
    getTask
}
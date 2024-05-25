const express = require("express")
const router = express.Router()
const {
  createWorkout,getWorkout,getWorkouts,deleteWorkout,updateWorkout
} = require('../controllers/workoutControllers')

//get all workouts
router.get('/',getWorkouts)

//geting single workout
router.get('/:id',getWorkout)

//post 
router.post('/', createWorkout)
//delete
router.delete('/:id', deleteWorkout)

//update
router.patch('/:id', updateWorkout)
module.exports = router
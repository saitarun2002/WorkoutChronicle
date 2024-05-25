require('dotenv').config()
const express = require("express")
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workout')
const app = express()

//middleware
app.use(express.json())
app.use((res, req, next)=>{
  console.log(req.path, req.method)
  next()
})

//routes
app.use('/api/workout',workoutRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
  //liesting to requests
  app.listen(process.env.PORT, ()=>{
    console.log("connected to db and liesting on port", process.env.PORT)
  }) 
})
.catch((error) =>{
  console.log(error)
})

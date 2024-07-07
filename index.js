import express, { json } from 'express';
import mongoose from 'mongoose';
import { dbconnect } from './config/db.js';
import { notesRouter } from './Routers/notes_router.js';

//Create a variable and assign to express
const app = express();



//Calling our database
dbconnect();

//Apply to middleware
app.use(express.json())

app.use(notesRouter)

// //Write a Post Request
// app.post('/note', (req, res)=>{
//     res.json('This is a post request');
// })

//Listen to your port
app.listen(8000, (req, res)=>{
    console.log('App is listening on Port 8000')
})
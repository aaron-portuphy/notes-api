import express, { json } from 'express';
import { dbconnect } from './config/db.js';

//Create a variable and assign to express
const app = express();

//Listen to your port
app.listen(8000, ()=>{
    console.log('App is listening on Port 8000')
})

//Calling our database
dbconnect();
app.use(express.json())

//Write a Post Request
app.post('/note', (req, res)=>{
    res.json('This is a post request');
})

//Atlas DB Password: NotesAPIAssignment
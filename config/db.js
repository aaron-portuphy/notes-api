import mongoose from "mongoose";
import 'dotenv/config'

const dbConnection = process.env.MONGO_URL

export const dbconnect = ()=>{
    mongoose.connect(dbConnection).then(
        console.log('Database is connected')
    )
}
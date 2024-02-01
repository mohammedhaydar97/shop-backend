import express from "express";
import dotenv from 'dotenv';
import cors from 'cors'; 
import connectDB from "./config/Db.js";
import productsRoutes from './routes/prodctRoute.js'
import userRoutes from './routes/userRoutes.js'
import cookieParser from "cookie-parser";
import {errorHandler,notFound} from './middleware/errorMiddleware.js'


dotenv.config();
connectDB();
const app = express();

//Body parser middleware

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cookieParser());

app.use(cors());

app.use('/api/products',productsRoutes)
app.use('/api/users',userRoutes)


const port = process.env.PORT || 5000;

app.use(errorHandler)
app.use(notFound)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

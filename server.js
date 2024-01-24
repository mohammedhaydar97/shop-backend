import express from "express";
import dotenv from 'dotenv';
import cors from 'cors'; 
import connectDB from "./config/Db.js";
import productsRoutes from './routes/prodctRoute.js'
import {errorHandler,notFound} from './middleware/errorMiddleware.js'


dotenv.config();
connectDB();
const app = express();

app.use(cors());

app.use('/api/products',productsRoutes)

const port = process.env.PORT || 5000;

app.use(errorHandler)
app.use(notFound)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

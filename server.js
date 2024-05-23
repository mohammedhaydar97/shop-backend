import cors from 'cors';
import dotenv from 'dotenv';
import express from "express";
import connectDB from "./config/Db.js";
import adRouter from './routes/adRouter.js';
import champRouter from './routes/champRouter.js';
import courtRoute from './routes/courtRoutes.js';
import productsRoutes from './routes/prodctRoute.js';
import reservation from './routes/reservationRoute.js';
import trainerRoutes from './routes/trainerRoutes.js';
import userRoutes from './routes/userRoutes.js';



import cookieParser from "cookie-parser";
import { errorHandler, notFound } from './middleware/errorMiddleware.js';


dotenv.config();
connectDB();
const app = express();

//Body parser middleware
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cookieParser());


app.use('/api/products',productsRoutes)
app.use('/api/users',userRoutes)
app.use('/api/trainer',trainerRoutes)
app.use('/api/court',courtRoute)
app.use('/api/ad',adRouter)
app.use('/api/champ',champRouter)
app.use('/api/reservation',reservation)







const port = process.env.PORT || 5000;

app.use(errorHandler)
app.use(notFound)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

import { config } from "dotenv";
import express from "express";
import path from 'path';
import connectToDB from "./config/dBconfig.js";
import userRouter from './routes/userRoutes.js';
import MovieRoutes from './routes/movieRouter.js';
import TheatreRouter from './routes/theatreRouter.js';
import BookinghRouter from './routes/bookingRoutes.js';

import { fileURLToPath } from 'url';
import { dirname ,join} from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


import cors from 'cors';
const app=express();
app.use(express.json());
app.use( cors());
config();
app.use(express.static(path.join(__dirname, 'Book_My_Shows/client/build')));
app.use('/api/user',userRouter);
app.use('/api/movie',MovieRoutes);
app.use("/api/theatre",TheatreRouter );
 app.use("/api/bookings",BookinghRouter );


app.listen(5050, async() => {
    await connectToDB()
    console.log(`Server started on port`);
});

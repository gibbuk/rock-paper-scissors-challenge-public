//import package dependencies
import express from 'express';
import dotenv from 'dotenv';

//import router dependencies
import { router as indexRouter } from './routes/indexRouter.js';
import { router as gameRouter } from './routes/gameRouter.js';
import { router as endOfRoundRouter } from './routes/endOfRoundRoute.js'

dotenv.config(); // Reminder -  add the following into config() argument if different .env files to be specified: { path: `.env.${process.env.NODE_ENV}` } and e.g. "SET NODE_ENV=development&&" in package.json

//set up the express app and its settings
const app = express();
const port = 3000;
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

//set up routes
app.use(`/`, indexRouter);
app.use(`/game`, gameRouter);
app.use(`/endofround`, endOfRoundRouter);


const server = app.listen(port, () => {
    console.log(`server is listening at http://localhost:${port}`);
});

export default server;
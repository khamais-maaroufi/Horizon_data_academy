import express from "express";
import cors from "cors";
import { readdirSync } from "fs";
import mongoose from "mongoose";
import csrf from "csurf";
import cookieParser from "cookie-parser";

const morgan = require("morgan");
require('dotenv').config();

const csrfProtection = csrf({ cookie: true });
//create express App
const app = express();

//Data Base
mongoose.connect(process.env.DATABASE, {
   //useCreateIndex: true,
   useNewUrlParser: true,
   useUnifiedTopology: true,
   //useFindAndModify: false,
})
.then(() => console.log("DB CONNECTED SUCCESFULLY."))
.catch((err) => console.log("DB CONNECTION ERR!", err));

//apply middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());
/* app.use((req, res, next) =>  { 
    console.log("this is my own middleware");
    next();
});
*/

//route
readdirSync("./routes").map((r) => app.use("/api", require('./routes/'+r)));

//csrf
app.use(csrfProtection);
app.get('/api/csrf-token', (req, res) => {
    res.json({csrfToken: req.csrfToken()});
});

//port 
const port = process.env.PORT || 8000;
app.listen(port, () => console.log('server is running on port: '+port));




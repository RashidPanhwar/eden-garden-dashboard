const express = require('express');
const mongoose = require('mongoose');

const DB_URI = 'mongodb://localhost:27017/eden-garden-dashboard';

const app = express();
app.use(express.json())

mongoose.connect(DB_URI).then(() => {console.log("Connected")}).catch((e) => {console.log(e.message)});

const insuredRoute = require('./routes/insuredPersonsRoutes');
app.use('/api/v1', insuredRoute);


app.listen(5000, () => {console.log("app is listening at port 5000")});
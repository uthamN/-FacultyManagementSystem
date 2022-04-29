const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var cors = require('cors');
require('dotenv').config()

app.use(cors({
  origin: true,
  credentials: true
}));

mongoose.connect(process.env.MONGODB_URL).then(console.log("Database conneceted"));

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

const facultyRouter = require('./routes/api/faculty.js');
const userRouter = require('./routes/api/user.js');
const leaveRouter = require('./routes/api/leaves');
const userleavesRouter = require('./routes/api/userLeaves');

app.use('/faculty', facultyRouter);
app.use('/user', userRouter);
app.use('/leave', leaveRouter);
app.use('/leaveDetails', userleavesRouter);

const PORT = process.env.PORT || 5000;


app.get('/', (req, res, next) => {
  res.send('<h1>Backend</h1>')
})

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
})
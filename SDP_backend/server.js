const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const mongoose = require('mongoose');
const unirest = require('unirest');


const eventRouter = require('./routes/event');
//const adminRouter = require('../backend/routes/admin');
//const eventRouter = require('./routes/event');


require('dotenv').config(); 

const app = express();
const cors = require('cors');
//connect database
connectDB();


//Init middleware
app.use(express.json({ extended: false }));
/*app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );

  next();
});*/
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);
app.use(bodyParser.json());
//app.get('/', (req, res) => res.send('API running'));

//Define routes
app.use('/uploads',express.static('uploads'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
//app.post('/confirmation', require('./routes/api/models/confirmation'));
//app.post('/resend', require('./routes/api/models/resending'));
app.use ('/routes/bookevent',require('./routes/bookevent'));
app.use('/routes/event',require('./routes/event'));
app.use('/routes/bookevent',require('./routes/bookevent'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// var req = unirest("POST", "https://www.fast2sms.com/dev/bulk");

// req.headers({
//     "content-type": "application/x-www-form-urlencoded",
//     "cache-control": "no-cache",
//     "authorization":"Xh0NJS8FL5lrwByG6itWHV1pbmOzvRfAPD4IaQTYKZjoCs29UEtFTmOeUhs8y4JfKpwd0VurSEinMZ6j"
// });

// req.form({
//     "sender_id": "FSTSMS",
//     "language": "english",
//     "route": "qt",
//     "numbers": 9427855633, 
//     "message":39025,
    
// });

// req.end(function (res) {
//     if (res.error) throw new Error(res.error);
//     console.log(res.body);
// });
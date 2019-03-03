const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// Endpoint Router
const UserRouter = require('./routes/user');
const CourseRouter = require('./routes/course');

app.use(cors());
app.use(bodyParser.json());

// Use Routes
app.use(UserRouter);
app.use(CourseRouter);

app.get('/', (req, res) =>{
    res.send({
        "message": "Welcome To API"
    });
});

app.listen(3210, () => {
    console.log("Run On Port:3210")
});
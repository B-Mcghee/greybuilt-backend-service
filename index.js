const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
require('dotenv/config');

app.use(express.json());
app.use(cors());


//Import Routes 
const projectsRoute = require('./routes/projects');
app.use('/projects', projectsRoute);
const biosRoute = require('./routes/bios');
app.use('/bios', biosRoute);


// Connect to DB
mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true },
     () => {
        console.log('connected')
    });
    // Route Listen
    app.listen(3000);
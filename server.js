const express = require('express');

const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

const feedbackRoutes = require('./routes/feedback');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api', feedbackRoutes);


const port = process.env.PORT || 8000

app.listen(port, () => console.log(`Server is running on port ${port}`));


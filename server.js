const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const db = require('./config/connection');
const routes = require('./routes');
require('dotenv').config();

const app = express();
app.use(helmet());
app.use(cors({origin: false}));

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => {
        console.log('API server running on port ', PORT)
        console.log(db)
    })
})
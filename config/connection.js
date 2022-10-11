const dotenv = require('dotenv');
const {connect, connection} = require('mongoose');

dotenv.config();

connect(process.env.MONGO_DB_URI, {
    
});

module.exports = connection;
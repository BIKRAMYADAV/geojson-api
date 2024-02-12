const express = require('express')
const PORT = 3000
require('dotenv').config()

const connectDB = require('./config/config')
const cors = require('cors')
const app = express();

//middleware
app.use(express.json());

//cors middleware
app.use(cors());

app.use('/api/v1/stores', require('./routes/stores'))


connectDB().then( app.listen(PORT, () => console.log(`The app is listening on port ${PORT}`)))
.catch((error) => console.log(error))
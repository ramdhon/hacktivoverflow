require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const mongoose = require('mongoose');
const DATABASE = 'tdd-hacktivOverflow'
mongoose.connect(`mongodb://localhost/${DATABASE}`, { useNewUrlParser: true });

const router = require('./router');

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', router);

app.listen(PORT, () => {
  console.log(`running on port:${PORT}`);
})


module.exports = app;
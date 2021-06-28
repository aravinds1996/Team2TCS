const express = require('express')
const app = express()
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017')

let port = 3300

let apiRoutes = require('./routes/routes')

app.use('/api',apiRoutes)
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
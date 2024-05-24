require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const mongoString = process.env.DATABASE_URL;


require('./models/proyecto');
require('./models/cliente'); 
require('./models/tipoDeProyecto'); 
require('./models/universidad'); 
require('./models/etapa'); 

const routeProyecto = require('./routes/routeProyecto');

mongoose.connect(mongoString, { useNewUrlParser: true, useUnifiedTopology: true });

const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error);
});

database.once('connected', () => {
  console.log('Database Connected');
});

const app = express();

app.use(cors());
app.use(express.json());

app.listen(4001, () => {
  console.log(`Server Started at ${4001}`);
});

app.use('/proyectos', routeProyecto);

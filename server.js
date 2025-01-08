require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/db');
const authRoutes = require('./src/routes/auth');
const path = require('path');
const cors = require('cors');
const app = express();

connectDB();
app.use(cors({origin:'*'}))
app.use(express.static('client'));
app.use(express.json());
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'index.html'));
  });
app.use('/api/auth', authRoutes);

const PORT = 5000;
app.listen(PORT, () =>{
    console.log(`Server running on port http://localhost:${PORT}`)
} );

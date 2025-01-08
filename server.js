require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/db');
const authRoutes = require('./src/routes/auth');

const app = express();

connectDB();

app.use(express.json());
app.get('/',(req,res)=>{
    res.send('API is running...');
})
app.use('/api/auth', authRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

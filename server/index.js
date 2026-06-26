const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/pharmacy-management';

mongoose.connect(MONGODB_URI)
  .then(() => console.log('✅ MongoDB Connected!'))
  .catch((err) => console.log('❌ MongoDB Error:', err));

const medicineRoutes = require('./routes/medicines');
app.use('/api/medicines', medicineRoutes);

// Home Route — Check karo app chal rahi hai
app.get('/', (req, res) => {
  res.json({ message: '💊 Pharmacy Management System Running!' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server chal raha hai port ${PORT} pe`);
});

module.exports = app;
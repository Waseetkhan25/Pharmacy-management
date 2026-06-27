const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

// ─────────────────────────────────────────────
// App Setup
// ─────────────────────────────────────────────
const app = express();
app.use(cors());
app.use(express.json());

// ─────────────────────────────────────────────
// Serve HTML UI from public folder
// ─────────────────────────────────────────────
app.use(express.static(path.join(__dirname, '../public')));

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/pharmacy-management';

// ─────────────────────────────────────────────
// MongoDB Se Connect Karo
// ─────────────────────────────────────────────
mongoose.connect(MONGODB_URI)
  .then(() => console.log('✅ MongoDB Connected!'))
  .catch((err) => console.log('❌ MongoDB Error:', err));

// ─────────────────────────────────────────────
// Routes
// ─────────────────────────────────────────────
const medicineRoutes = require('./routes/medicines');
app.use('/api/medicines', medicineRoutes);

// Home Route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// ─────────────────────────────────────────────
// Server Start Karo
// ─────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`🚀 Server chal raha hai port ${PORT} pe`);
});

module.exports = app;
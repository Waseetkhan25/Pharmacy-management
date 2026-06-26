const express = require('express');
const router = express.Router();
const Medicine = require('../models/medicine');

router.get('/', async (req, res) => {
  try {
    const medicines = await Medicine.find();
    res.json(medicines);
  } catch (err) {
    res.status(500).json({ message: '❌ Server Error', error: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const medicine = new Medicine(req.body);
    const saved = await medicine.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: '❌ Kuch galat hua', error: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updated = await Medicine.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: '❌ Update nahi hua', error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Medicine.findByIdAndDelete(req.params.id);
    res.json({ message: '✅ Medicine delete ho gayi!' });
  } catch (err) {
    res.status(400).json({ message: '❌ Delete nahi hua', error: err.message });
  }
});

module.exports = router;
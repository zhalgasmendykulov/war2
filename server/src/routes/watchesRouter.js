const { Router } = require('express');
const { Watch } = require('../../db/models');

const watchesRouter = Router();

watchesRouter.get('/', async (req, res) => {
  try {
    const watches = await Watch.findAll();
    res.json(watches);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = watchesRouter;
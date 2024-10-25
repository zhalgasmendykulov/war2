const { Router } = require('express');


const userRouter = Router();

userRouter.get('/', async (req, res) => {
  try {
    const allUsers = await User.findAll()
    if(allUsers) {
        res.json(allUsers)
    } else {
        res.sendStatus(400)
    }
  } catch (error) {
    res.sendStatus(500)
  }
});

module.exports = userRouter;
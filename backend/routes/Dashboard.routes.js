const express = require("express");
const { PlayerModel } = require("../models/Player.model");
const dashboardRouter = express.Router();

dashboardRouter.get("/", async (req, res) => {
  try {
        const players = await PlayerModel.find().sort({
          Score: -1,
        });
        res.send(players);
  } catch (error) {
    res.status(500).send(error);
  }
});
module.exports = { dashboardRouter };

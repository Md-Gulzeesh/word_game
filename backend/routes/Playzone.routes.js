const express = require("express");
const { PlayerModel } = require("../models/Player.model");
const playZoneRouter = express.Router();

playZoneRouter.get("/word", async (req, res) => {
 try {
          const characters = "ABCDEFGHIJKLMNPQRSTUVWXYZ";
          var word = "";
          let arr = [4, 6];
          let length = Math.floor(Math.random() * 2);
          for (let i = 0; i < arr[length]; i++) {
            let char = Math.floor(Math.random() * characters.length);
            word = word + characters.charAt(char);
          }
          res.send(word);
 } catch (error) {
    res.status(500).send(error);
 }
});
playZoneRouter.post("/", async (req, res) => {
 try {
     await PlayerModel.insertMany([req.body]);
     res.send({message:"Score added!"});
 } catch (error) {
    res.status(500).send(error);
 }
});

module.exports = { playZoneRouter };

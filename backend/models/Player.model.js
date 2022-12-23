const mongoose = require("mongoose");
const playerSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Difficulty_level: { type: String, required: true },
  Score: { type: Number, required: true }
});
const PlayerModel = mongoose.model("player", playerSchema);

module.exports = { PlayerModel };

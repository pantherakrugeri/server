const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Ability = new Schema(
  {
    abilityId: Number,
    abilityName: String,
    abilityType: String,
  },
  { collection: "abilities" }
);

module.exports = mongoose.model("ability", Ability);

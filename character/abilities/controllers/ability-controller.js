const AbilityModel = require("../models/ability-model");

getAbilities = async (req, res) => {
  let lookup = {};
  if (req.query.gamesystem) {
    lookup = {gameSystem: req.query.gamesystem};
  }
  await AbilityModel.find(lookup, (err, abilities) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!abilities.length) {
      return res
        .status(404)
        .json({ success: false, error: `Abilities not found` });
    }
    return res.status(200).json({ success: true, data: abilities });
  }).catch((err) => console.log(err));
};

module.exports = {
  getAbilities,
};

const AbilityModel = require("../models/ability-model");

getAbilities = async (req, res) => {
  await AbilityModel.find({gameSystem: req.query.gamesystem}, (err, abilities) => {
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

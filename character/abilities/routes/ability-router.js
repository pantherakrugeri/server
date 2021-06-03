const express = require("express");

const abilityController = require("../controllers/ability-controller");

const router = express.Router();

router.get("/abilities", abilityController.getAbilities);

module.exports = router;

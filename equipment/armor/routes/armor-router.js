const express = require('express')

const armorControl = require('../controllers/armor-controller')

const router = express.Router()

router.post('/armor', armorControl.createArmor)
router.put('/armor/:id', armorControl.updateArmor)
router.delete('/armor/:id', armorControl.deleteArmor)
router.get('/armor/:id', armorControl.getArmorById)
router.get('/armor', armorControl.getArmor)

module.exports = router
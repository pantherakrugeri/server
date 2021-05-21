const Armor = require('../models/armor-model');

createArmor = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide armor',
        })
    }

    const armor = new Armor(body)

    if (!armor) {
        return res.status(400).json({ success: false, error: err })
    }

    armor
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: armor._id,
                message: 'Armor created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Armor not created!',
            })
        })
}

updateArmor = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Armor.findOne({ _id: req.params.id }, (err, armor) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Armor not found!',
            })
        }
        armor.name = body.name
        armor.time = body.time
        armor.rating = body.rating
        armor
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: armor._id,
                    message: 'Armor updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Armor not updated!',
                })
            })
    })
}

deleteArmor = async (req, res) => {
    await Armor.findOneAndDelete({ _id: req.params.id }, (err, armor) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!armor) {
            return res
                .status(404)
                .json({ success: false, error: `Armor not found` })
        }

        return res.status(200).json({ success: true, data: armor })
    }).catch(err => console.log(err))
}

getArmorById = async (req, res) => {
    await Armor.findOne({ _id: req.params.id }, (err, armor) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        return res.status(200).json({ success: true, data: armor })
    }).catch(err => console.log(err))
}

getArmor = async (req, res) => {
    await Armor.find({}, (err, armor) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!armor.length) {
            return res
                .status(404)
                .json({ success: false, error: `Armor not found` })
        }
        return res.status(200).json({ success: true, data: armor })
    }).catch(err => console.log(err))
}

module.exports = {
    createArmor,
    updateArmor,
    deleteArmor,
    getArmor,
    getArmorById,
}
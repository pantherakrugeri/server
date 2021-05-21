const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Armor = new Schema({
    armorName: {
        type: String,
         required: true
    },
    description: String,
    cost: { 
        copper: Number,
        silver: Number,
        gold: Number,
        platinum: Number
    },
    armorShieldBonus: Number,
    maximumDexterityBonus: Number,
    armorCheckPenalty: Number,
    arcaneSpellFailureChance: Number,
    unencumberedSpeed: {
        medium: String,
        small: String
    },
    weight: String,
    source: String,
    armorType: String,
    itemType: String
}, {collection: 'armor'});

module.exports = mongoose.model('armor', Armor);
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const expenseSchema = new Schema({
    mortgageOrRent: {
        type: String,
        required: false
    },
    electricity: {
        type: String,
        required: true
    },
    heatingOilOrGas: {
        type: String,
        required: true
    },
    internet: {
        type: String,
        required: true
    },
    cable: {
        type: String,
        required: true
    },
    water: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
})
                            // Model Name    // Model Blueprint
module.exports = mongoose.model("Expense", expenseSchema)




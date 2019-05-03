const mongoose = require('mongoose')
const Schema = mongoose.Schema

const expenseSchema = new Schema({
    income1: {
        type: String,
        required: true
    },
    income2: {
        type: String,
        required: true
    },
    income3: {
        type: String,
        required: true
    },
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
    },
    transportation: {
        type: String,
        required: true
    },
    insurance: {
        type: String,
        required: true
    },
    loans: {
        type: String,
        required: true
    },
    memberships: {
        type: String,
        required: true
    },
    groceries: {
        type: String,
        required: true
    },
    clothing: {
        type: String,
        required: true
    },
    education: {
        type: String,
        required: true
    },
    personalCare: {
        type: String,
        required: true
    },
    entertainment: {
        type: String,
        required: true
    },
    charities: {
        type: String,
        required: true
    }
})
                            // Model Name    // Model Blueprint
module.exports = mongoose.model("Expense", expenseSchema)
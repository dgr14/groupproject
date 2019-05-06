const mongoose = require('mongoose')
const Schema = mongoose.Schema

const expenseSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    income1: {
        type: String,
        required: false
    },
    income2: {
        type: String,
        required: false
    },
    income3: {
        type: String,
        required: false
    },
    mortgageOrRent: {
        type: String,
        required: false
    },
    electricity: {
        type: String,
        required: false
    },
    heatingOilOrGas: {
        type: String,
        required: false
    },
    internet: {
        type: String,
        required: false
    },
    cable: {
        type: String,
        required: false
    },
    water: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: false
    },
    transportation: {
        type: String,
        required: false
    },
    insurance: {
        type: String,
        required: false
    },
    loans: {
        type: String,
        required: false
    },
    memberships: {
        type: String,
        required: false
    },
    groceries: {
        type: String,
        required: false
    },
    clothing: {
        type: String,
        required: false
    },
    education: {
        type: String,
        required: false
    },
    personalCare: {
        type: String,
        required: false
    },
    entertainment: {
        type: String,
        required: false
    },
    charities: {
        type: String,
        required: false
    }
})
                            // Model Name    // Model Blueprint
module.exports = mongoose.model("Expense", expenseSchema)
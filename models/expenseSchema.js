const mongoose = require('mongoose')
const Schema = mongoose.Schema

const expenseSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    income1: {
        type: Boolean
    },
    income2: {
        type: Boolean
    },
    income3: {
        type: Boolean
    },
    mortgageOrRent: {
        type: Boolean
    },
    electricity: {
        type: Boolean
    },
    heatingOilOrGas: {
        type: Boolean
    },
    internet: {
        type: Boolean
    },
    cable: {
        type: Boolean
    },
    water: {
        type: Boolean
    },
    phone: {
        type: Boolean
    },
    transportation: {
        type: Boolean
    },
    insurance: {
        type: Boolean
    },
    loans: {
        type: Boolean
    },
    memberships: {
        type: Boolean
    },
    groceries: {
        type: Boolean
    },
    clothing: {
        type: Boolean
    },
    education: {
        type: Boolean
    },
    personalCare: {
        type: Boolean
    },
    entertainment: {
        type: Boolean
    },
    charities: {
        type: Boolean
    },
    income1Amount: {
        type: String
    },
    income2Amount: {
        type: String
    },
    income3Amount: {
        type: String
    },
    mortgageOrRentAmount: {
        type: String
    },
    electricityAmount: {
        type: String
    },
    heatingOilOrGasAmount: {
        type: String
    },
    internetAmount: {
        type: String
    },
    cableAmount: {
        type: String
    },
    waterAmount: {
        type: String
    },
    phoneAmount: {
        type: String
    },
    transportationAmount: {
        type: String
    },
    insuranceAmount: {
        type: String
    },
    loansAmount: {
        type: String
    },
    membershipsAmount: {
        type: String
    },
    groceriesAmount: {
        type: String
    },
    clothingAmount: {
        type: String
    },
    educationAmount: {
        type: String
    },
    personalCareAmount: {
        type: String
    },
    entertainmentAmount: {
        type: String
    },
    charitiesAmount: {
        type: String
    },
    income1Date: {
        type: String
    },
    income2Date: {
        type: String
    },
    income3Date: {
        type: String
    },
    mortgageOrRentDate: {
        type: String
    },
    electricityDate: {
        type: String
    },
    heatingOilOrGasDate: {
        type: String
    },
    internetDate: {
        type: String
    },
    cableDate: {
        type: String
    },
    waterDate: {
        type: String
    },
    phoneDate: {
        type: String
    },
    transportationDate: {
        type: String
    },
    insuranceDate: {
        type: String
    },
    loansDate: {
        type: String
    },
    membershipsDate: {
        type: String
    },
    groceriesDate: {
        type: String
    },
    clothingDate: {
        type: String
    },
    educationDate: {
        type: String
    },
    personalCareDate: {
        type: String
    },
    entertainmentDate: {
        type: String
    },
    charitiesDate: {
        type: String
    }
})
                            // Model Name    // Model Blueprint
module.exports = mongoose.model("Expense", expenseSchema)
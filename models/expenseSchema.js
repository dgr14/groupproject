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
        type: Boolean
    },
    income2Amount: {
        type: Boolean
    },
    income3Amount: {
        type: Boolean
    },
    mortgageOrRentAmount: {
        type: Boolean
    },
    electricityAmount: {
        type: Boolean
    },
    heatingOilOrGasAmount: {
        type: Boolean
    },
    internetAmount: {
        type: Boolean
    },
    cableAmount: {
        type: Boolean
    },
    waterAmount: {
        type: Boolean
    },
    phoneAmount: {
        type: Boolean
    },
    transportationAmount: {
        type: Boolean
    },
    insuranceAmount: {
        type: Boolean
    },
    loansAmount: {
        type: Boolean
    },
    membershipsAmount: {
        type: Boolean
    },
    groceriesAmount: {
        type: Boolean
    },
    clothingAmount: {
        type: Boolean
    },
    educationAmount: {
        type: Boolean
    },
    personalCareAmount: {
        type: Boolean
    },
    entertainmentAmount: {
        type: Boolean
    },
    charitiesAmount: {
        type: Boolean
    },
    income1Date: {
        type: Boolean
    },
    income2Date: {
        type: Boolean
    },
    income3Date: {
        type: Boolean
    },
    mortgageOrRentDate: {
        type: Boolean
    },
    electricityDate: {
        type: Boolean
    },
    heatingOilOrGasDate: {
        type: Boolean
    },
    internetDate: {
        type: Boolean
    },
    cableDate: {
        type: Boolean
    },
    waterDate: {
        type: Boolean
    },
    phoneDate: {
        type: Boolean
    },
    transportationDate: {
        type: Boolean
    },
    insuranceDate: {
        type: Boolean
    },
    loansDate: {
        type: Boolean
    },
    membershipsDate: {
        type: Boolean
    },
    groceriesDate: {
        type: Boolean
    },
    clothingDate: {
        type: Boolean
    },
    educationDate: {
        type: Boolean
    },
    personalCareDate: {
        type: Boolean
    },
    entertainmentDate: {
        type: Boolean
    },
    charitiesDate: {
        type: Boolean
    }
})
                            // Model Name    // Model Blueprint
module.exports = mongoose.model("Expense", expenseSchema)
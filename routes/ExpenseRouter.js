const express = require('express')
const expenseRouter = express.Router()
const Expense = require('../models/expenseSchema.js')

// Mongoose query methods
    // .findOneAndRemove()
    // .findOneAndUpdate()
    // .save()
    // .find()
    // .findOne()

// GET ALL - 
expenseRouter.get("/", (req , res, next) => {
    // .find is a get ALL method,
    // returns an array of the collection
    Expense.find((err, expenses) => {
        if(err){
            res.status(500)
            return next(err)
        }
            return res.status(200).send()
    })
})

// GET ALL - with async - await
expenseRouter.get("/", async (req, res, next) => {
    try {
        const char
    }
})
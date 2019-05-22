import React, { Component } from 'react'
import AddExpenseForm from './AddExpenseForm.js'
// import { withExpenses } from '../context/ExpenseProvider.js'
// import { ExpenseList } from '../context/ExpenseList.js'

class AddExpensePage extends Component {
    constructor(){
        super()
            this.state = {
                // Income
                income1: false, income1Amount: "", income1Date: "",
                income2: false, income2Amount: "", income2Date: "",
                income3: false, income3Amount: "", income3Date: "",
                // Expenses
                mortgageOrRent: false, mortgageOrRentAmount: "", mortgageOrRentDate: "",
                electricity: false, electricityAmount: "", electricityDate: "",
                heatingOilOrGas: false, heatingOilOrGasAmount: "", heatingOilOrGasDate: "",
                internet: false, internetAmount: "", internetDate: "",
                cable: false, cableAmount: "", cableDate: "",
                water: false, waterAmount: "", waterDate: "",
                phone: false, phoneAmount: "", phoneDate: "",
                transportation: false, transportationAmount: "", transportationDate: "",
                insurance: false, insuranceAmount: "", insuranceDate: "",
                loans: false, loansAmount: "", loansDate: "",
                memberships: false, membershipsAmount: "", membershipsDate: "",
                groceries: false, groceriesAmount: "", groceriesDate: "",
                clothing: false, clothingAmount: "", clothingDate: "",
                education: false, educationAmount: "", educationDate: "",
                personalCare: false, personalCareAmount: "", personalCareDate: "",
                entertainment: false, entertainmentAmount: "", entertainmentDate: "",
                charities: false, charitiesAmount: "", charitiesDate: "",
            }
    }

    handleChange = e => {
        const { name } = e.target
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addNewExpense(this.state)
        this.setState({ fullName: "", username: "", expenseAmount: "" })
    }

    render(){
        return (
            <div>
                {/* <button onClick={() => this.props.history.goBack()}>Back</button> */}
                {/* <button onClick={getExpenses}>Get Expenses</button> */}
                <AddExpenseForm 
                    {...this.state}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
            </div>
        )
    }
}

// export default withExpenses(AddExpensePage)
export default AddExpensePage
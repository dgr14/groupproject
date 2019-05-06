import React, { Component } from 'react'
import Expense from './Expense.js'
import AddUserForm from './AddUserForm.js'
import SignInForm from './SignInForm.js'
import AddExpenseForm from './AddExpenseForm.js'
// import { withExpenses } from '../context/ExpenseProvider.js'

// // Model I'm using to build state with the class below
// const ExpenseList = (props) => {
//     const { getExpenses, expenses, history } = props
//     return (
//         <div className="container">
//             <AddExpenseForm /><br></br>
//             <button onClick={getExpenses}>Get Financial Report</button>
//             <button onClick={() => history.push("/addExpense")}>Add New Expense/Income</button><br></br><br></br>
//             {/* { expenses.map(expense => <Expense key={expense._id} {...expense}/>)}  */}
//         </div>
//     )
// }

class ExpenseList extends Component {
    constructor(){
        super()
        this.state = {
            fullName: "", 
            username: "", 
            mortgageOrRent: "", 
            mortgageOrRentAmount: "", 
            mortgageOrRentDate: "", 
            electricity: "", 
            oil: "",
            oilAmount: "",
            cable: "",
            internet: "",
            water: "",
            phone: "",
            electricityAmount: "", 
            electricityDate: "", 
            transportationAmount: "", 
            transportationDate: "", 
            insuranceAmount: "", 
            insuranceDate: "", 
            loansAmount: "", 
            loansDate: "", 
            membershipsAmount: "", 
            membershipsDate: "", 
            groceriesAmount: "", 
            groceriesDate: "", 
            clothingAmount: "", 
            clothingDate: "", 
            educationAmount: "", 
            educationDate: "", 
            personalCareAmount: "", 
            personalCareDate: "",  
            entertainmentAmount: "", 
            entertainmentDate: "", 
            charitiesAmount: "", 
            charitiesDate: "", 
            income1: false, 
            income1Amount: "", 
            income1Date: "", 
            income2: false, 
            income2Amount: "", 
            income2Date: "", 
            income3: "", 
            income3Amount: "", 
            income3Date: ""
            
        }
    }
    // Need handleChange and handleSubmit - (w/ prevent default)

    handleChange = (e) => {
        const {name} = e.target
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        this.setState({
            [name]: value
        })
    }

    render(){

        return(
            <div>
                <AddExpenseForm 
                    handleChange = {this.handleChange}
                    {...this.state}
                />
            </div>
        )
    }

}
console.log(ExpenseList)


// export default withExpenses(ExpenseList)
export default ExpenseList
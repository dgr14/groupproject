import React from 'react'
import Expense from './Expense.js'
import AddUserForm from './AddUserForm.js'
import SignInForm from './SignInForm.js'
import AddExpenseForm from './AddExpenseForm.js'
// import { withExpenses } from '../context/ExpenseProvider.js'

const ExpenseList = (props) => {
    const { getExpenses, expenses, history } = props
    return (
        <div className="container">
            <AddUserForm /><br></br>
            <SignInForm /><br></br>
            <AddExpenseForm /><br></br>
            <button onClick={getExpenses}>Get Financial Report</button>
            <button onClick={() => history.push("/addExpense")}>Add New Expense/Income</button><br></br><br></br>
            {/* { expenses.map(expense => <Expense key={expense._id} {...expense}/>)}  */}
        </div>
    )
}

// export default withExpenses(ExpenseList)
export default ExpenseList
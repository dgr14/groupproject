import React, { Component } from 'react'
import Styles from './ExpenseView.module.css'
import { withContext } from "../AppContext"

class ExpenseView extends Component {
    componentDidMount(){
        this.props.getExpenses()
    }

    render(){

        const mappedExpenses = this.props.expenses.map(expense => {
            return (
            <div className={Styles.expenseReturnDiv}>
                <ul>
                    { expense.income1 &&
                        <li>
                            <p>Income 1: {expense.income1Amount || "none"}</p>
                            <p>Due Date: {expense.income1Date || "none"} </p> 
                        </li>
                    }
                    <li>
                        <p>Income 2: {expense.income2Amount || "none"}</p>
                        <p>Due Date: {expense.income2Date || "none"} </p> 
                    </li>
                    <li>
                        <p>Income 3: {expense.income3Amount || "none"}</p>
                        <p>Due Date: {expense.income3Date || "none"} </p>
                    </li> 
                    <li>
                        <p>Mortgage/Rent: {expense.mortgageOrRent || "none"} </p>
                    </li>
                    <li>
                        <p>Electricity: {expense.electricity || "none"} </p>
                    </li>
                    <li>
                        <p>Heating/Oil/Natural Gas {expense.heatingOilOrGas || "none"} </p>
                    </li>
                    <li>
                        <p>Internet: {expense.internet || "none"} </p>
                    </li>
                    <li>
                        <p>Cable: {expense.cable || "none"} </p>
                    </li>
                    <li>
                        <p>Water: {expense.water || "none"}</p>
                    </li>
                    <li>
                        <p>Phone: {expense.phone || "none"}</p>
                    </li>
                    <li>
                        <p>Transportation: {expense.transportation || "none"}</p>
                    </li>
                    <li>
                        <p>Insurance: {expense.insurance || "none"}</p>
                    </li>
                    <li>
                        <p>Loans: {expense.loans || "none"}</p>
                    </li>
                    <li>
                        <p>Memberships: {expense.memberships || "none"}</p>
                    </li>
                    <li>
                        <p>Groceries: {expense.groceries || "none"} </p>
                    </li>
                    <li>
                        <p>Clothing: {expense.clothing || "none"}</p>
                    </li>
                    <li>
                        <p>Education: {expense.education || "none"}</p>
                    </li>
                    <li>
                        <p>Personal Care: {expense.personalCare || "none"} </p>
                    </li>
                    <li>
                        <p>Entertainment: {expense.entertainment || "none" }</p>
                    </li>
                    <li>
                        <p>Charities: {expense.charities || "none"}</p>
                    </li>

                </ul>
            
            </div>
      )})

      return (
          <div className={Styles.expViewDiv}>
              {mappedExpenses}
          </div>
      )
  }
}
        
export default withContext(ExpenseView);

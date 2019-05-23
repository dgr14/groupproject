import React, { Component } from 'react'
import Styles from './ExpenseView.module.css'
import { withContext } from "../AppContext"

class ExpenseView extends Component {
    componentDidMount(){
        this.props.getExpenses()
    }

    render(){
            console.log(this.props)
        const mappedExpenses = this.props.expenses.map(expense => {
            console.log(expense)
            return (
            <div className={Styles.expenseReturnDiv}>
                
                    <ul>
                        { expense.income1 &&
                            <li>
                                <p>Income 1: ${expense.income1Amount || "none"}</p>
                                <p>Due Date: {expense.income1Date || "none"} </p> 
                            </li>
                        }
                        { expense.income2 &&
                        
                        <li>
                            <p>Income 2: ${expense.income2Amount || "none"}</p>
                            <p>Due Date: {expense.income2Date || "none"} </p> 
                        </li>
                        }
                        { expense.income3 &&
                        <li>
                            <p>Income 3: ${expense.income3Amount || "none"}</p>
                            <p>Due Date: {expense.income3Date || "none"} </p>
                        </li> 
                        }
                        {/* add in amounts and dates to everything */}
                        { expense.mortgageOrRent && 
                        <li>
                            <p>Mortgage/Rent: ${expense.mortgageOrRentAmount.toString() || "none"} </p>
                            <p>Due: {expense.mortgageOrRentDate}</p>
                        </li>
                        }
                        { expense.electricity &&
                        <li>
                            <p>Electricity: ${expense.electricityAmount.toString() || "none"} </p>
                            <p>Due: {expense.electricityDate.toString()}</p>
                        </li>
                        }
                        { expense.heatingOilOrGas &&
                        <li>
                            <p>Heating/Oil/Natural Gas ${expense.heatingOilOrGasAmount.toString() || "none"} </p>
                            <p>Due: {expense.heatingOilOrGasDate.toString()}</p>
                        </li>
                        }
                        { expense.internet &&
                        <li>
                            <p>Internet: {expense.internet || "none"} </p>
                        </li>
                        }
                        { expense.cable &&
                        <li>
                            <p>Cable: {expense.cable || "none"} </p>
                        </li>
                        }
                        { expense.water &&
                        <li>
                            <p>Water: {expense.water || "none"}</p>
                        </li>
                        }
                        { expense.phone &&
                        <li>
                            <p>Phone: {expense.phone || "none"}</p>
                        </li>
                        }
                        { expense.transportation &&
                        <li>
                            <p>Transportation: {expense.transportation || "none"}</p>
                        </li>
                        }
                        { expense.insurance &&
                        <li>
                            <p>Insurance: {expense.insurance || "none"}</p>
                        </li>
                        }
                        { expense.loans &&
                        <li>
                            <p>Loans: {expense.loans || "none"}</p>
                        </li>
                        }
                        { expense.memberships &&
                        <li>
                            <p>Memberships: {expense.memberships || "none"}</p>
                        </li>
                        }
                        { expense.groceries &&
                        <li>
                            <p>Groceries: {expense.groceries || "none"} </p>
                        </li>
                        }
                        { expense.clothing &&
                        <li>
                            <p>Clothing: {expense.clothing || "none"}</p>
                        </li>
                        }
                        { expense.education &&
                        <li>
                            <p>Education: {expense.education || "none"}</p>
                        </li>
                        }
                        { expense.personalCare &&
                        <li>
                            <p>Personal Care: {expense.personalCare || "none"} </p>
                        </li>
                        }
                        { expense.entertainment &&
                        <li>
                            <p>Entertainment: {expense.entertainment || "none" }</p>
                        </li>
                        }
                        { expense.charities &&
                        <li>
                            <p>Charities: {expense.charities || "none"}</p>
                        </li>
                        }

                    </ul>
            
            </div>
      )}).reverse()

      return (
          <div className={Styles.expViewDiv}>
              {mappedExpenses}
          </div>
      )
  }
}
        
export default withContext(ExpenseView);

import React, { Component } from 'react'
import Styles from './ExpenseView.module.css'
import { withContext } from "../AppContext"
import moment from 'moment'

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
                            <h3 className={Styles.titles}>Income</h3>
                        { expense.income1 &&
                            <li>
                                <p>Income 1: ${expense.income1Amount || "none"}</p>
                                <p>Received: {moment(expense.income1Date).format("MMM Do YY") || "none"} </p> 
                            </li>
                        }
                        { expense.income2 &&
                        
                        <li>
                            <p>Income 2: ${expense.income2Amount || "none"}</p>
                            <p>Received: {moment(expense.income2Date).format("MMM Do YY") || "none"} </p> 
                        </li>
                        }
                        { expense.income3 &&
                        <li>
                            <p>Income 3: ${expense.income3Amount || "none"}</p>
                            <p>Received: {moment(expense.income3Date).format("MMM Do YY") || "none"} </p>
                        </li> 
                        }
                        {/* add in amounts and dates to everything */}
                        <h3 className={Styles.titles}>Expenses</h3>
                        { expense.mortgageOrRent && 
                        <li>
                            <p>Mortgage/Rent: ${expense.mortgageOrRentAmount || "none"} </p>
                            <p>Due: {moment(expense.mortgageOrRentDate).format("MMM Do YY") || "none"}</p>
                        </li>
                        }
                        { expense.electricity &&
                        <li>
                            <p>Electricity: ${expense.electricityAmount || "none"} </p>
                            <p>Due: {moment(expense.electricityDate).format("MMM Do YY") || "none"}</p>
                        </li>
                        }
                        { expense.heatingOilOrGas &&
                        <li>
                            <p>Heating/Oil/Gas: ${expense.heatingOilOrGasAmount || "none"} </p>
                            <p>Due: {moment(expense.heatingOilOrGasDate).format("MM Do YY") || "none"}</p>
                        </li>
                        }
                        { expense.internet &&
                        <li>
                            <p>Internet: {expense.internetAmount || "none"} </p>
                            <p>Due: {moment(expense.internetDate).format("MM Do YY") || "none"}</p>
                        </li>
                        }
                        { expense.cable &&
                        <li>
                            <p>Cable: {expense.cableAmount || "none"} </p>
                            <p>Due: {moment(expense.cableDate).format("MM Do YY") || "none"}</p>
                        </li>
                        }
                        { expense.water &&
                        <li>
                            <p>Water: {expense.waterAmount || "none"}</p>
                            <p>Due: {moment(expense.waterDate).format("MM Do YY") || "none"}</p>
                        </li>
                        }
                        { expense.phone &&
                        <li>
                            <p>Phone: {expense.phoneAmount || "none"}</p>
                            <p>Due: {moment(expense.phoneDate).format("MM Do YY") || "none"}</p>
                        </li>
                        }
                        { expense.transportation &&
                        <li>
                            <p>Transportation: {expense.transportationAmount || "none"}</p>
                            <p>Due: {moment(expense.transportationDate).format("MM Do YY") || "none"}</p>
                        </li>
                        }
                        { expense.insurance &&
                        <li>
                            <p>Insurance: {expense.insuranceAmount || "none"}</p>
                            <p>Due: {moment(expense.insuranceDate).format("MM Do YY") || "none"}</p>
                        </li>
                        }
                        { expense.loans &&
                        <li>
                            <p>Loans: {expense.loansAmount || "none"}</p>
                            <p>Due: {moment(expense.loansDate).format("MM Do YY") || "none"}</p>
                        </li>
                        }
                        { expense.memberships &&
                        <li>
                            <p>Memberships: {expense.membershipsAmount || "none"}</p>
                            <p>Due: {moment(expense.membershipsDate).format("MM Do YY") || "none"}</p>
                        </li>
                        }
                        { expense.groceries &&
                        <li>
                            <p>Groceries: {expense.groceriesAmount || "none"}</p>
                            <p>Due: {moment(expense.groceriesDate).format("MM Do YY") || "none"}</p>
                        </li>
                        }
                        { expense.clothing &&
                        <li>
                            <p>Clothing: {expense.clothingAmount || "none"}</p>
                            <p>Due: {moment(expense.clothingDate).format("MM Do YY") || "none"}</p>
                        </li>
                        }
                        { expense.education &&
                        <li>
                            <p>Education: {expense.educationAmount || "none"}</p>
                            <p>Due: {moment(expense.educationDate).format("MM Do YY") || "none"}</p>
                        </li>
                        }
                        { expense.personalCare &&
                        <li>
                            <p>Personal Care: {expense.personalCareAmount || "none"} </p>
                            <p>Due: {moment(expense.personalCareDate).format("MM Do YY") || "none"}</p>
                        </li>
                        }
                        { expense.entertainment &&
                        <li>
                            <p>Entertainment: {expense.entertainmentAmount || "none" }</p>
                            <p>Due: {moment(expense.entertainmentDate).format("MM Do YY") || "none"}</p>
                        </li>
                        }
                        { expense.charities &&
                        <li>
                            <p>Charities: {expense.charitiesAmount || "none"}</p>
                            <p>Due: {moment(expense.charities.Date).format("MM Do YY") || "none"}</p>
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

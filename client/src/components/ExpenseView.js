import React, { Component } from 'react'
import Styles from './ExpenseView.module.css'
import { withContext } from "../AppContext"

class ExpenseView extends Component {
    componentDidMount(){
        this.props.getExpenses()
    }
    render(){

    
    return (
        <div className={Styles.expViewDiv}>

        {this.props.expenses.map(expense => {
            return(
                <div>
                    {expense.income1Amount}
                </div>
            )
        })}
            
        </div>
    )}
}

export default withContext(ExpenseView) ;

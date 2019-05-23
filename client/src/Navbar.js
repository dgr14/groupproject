import React from 'react'
import Styles from './Navbar.module.css'
import { withContext } from "./AppContext"
import {Link} from "react-router-dom"


function Navbar(props) {
    return (
        <div className={Styles.navDiv} style={props.toggle?{left: 0} : {left: -200}}>
             {/* here I would like to create a place for the user to be displayed */}
             {/* I'll have to get  */}

            <Link className={Styles.navButton} to = "/expenses/entry">New Expense</Link>
            <Link className={Styles.navButton} to = "/expenses/expense">View Expenses</Link>
            <button onClick={() => props.logout()}>Logout</button>
        </div>
    )
}

export default withContext(Navbar)

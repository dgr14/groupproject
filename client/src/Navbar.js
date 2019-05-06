import React from 'react'
import Styles from './Navbar.module.css'

function Navbar() {
    return (
        <div className={Styles.navDiv}>
             {/* here I would like to create a place for the user to be displayed */}
             {/* I'll have to get  */}

            <button>New Expense</button>
            <button>View Expenses</button>
        </div>
    )
}

export default Navbar

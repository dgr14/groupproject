import React from 'react'
import Styles from './Header.module.css'

function Header() {
    return (
        <div>
            <div className= {Styles.imgDiv}>

            </div>

            <div className={Styles.headerReturnDiv}>
                <h1 className={Styles.headerText}>FinTracker</h1>
            </div>
        </div>
    )
}

export default Header
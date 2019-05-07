import React from 'react'
import Styles from './Header.module.css'

function Header() {
    return (
        <div>
            <div className={Styles.headerReturnDiv}>
            <h1>FinTracker</h1>

        {/* <img src="https://cdn.pixabay.com/photo/2015/10/31/11/58/money-1015277_960_720.jpg"/> */}
            </div>
        </div>
    )
}

export default Header
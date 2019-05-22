import React from 'react'
import Styles from './Header.module.css'

function Header(props) {
    return (
        <div>
            <div className={Styles.headerReturnDiv}>
                <button className={Styles.toggleButton} onClick ={props.toggler}>
                    |||
                </button>
                <h1 className={Styles.headerText}>FinTracker</h1>
            </div>
        </div>
    )
}

export default Header
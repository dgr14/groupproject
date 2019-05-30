import React from 'react';
// import { Route, Switch, Link, Redirect } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Styles from "./Auth.module.css"
// import MainView from '../MainView';
// import ProtectedRoute from "./ProtectedRoute";
// import ExpenseList from '../components/ExpenseList';

function Auth() {
    return (
        <div className={Styles.authReturnDiv}>
            <h1 className={Styles.mainTitleHeader}>Fin-Tracker</h1>
                <Login />
                <Signup />
        </div>
    )
}

export default Auth
/*
<div className="app-wrapper">
    <Signup />
</div>
<nav className="login-wrapper">
*/
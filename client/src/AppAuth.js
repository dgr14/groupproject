import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Header from './Header';
import Navbar from './Navbar';
import View from './View';
import Footer from './Footer';
import Styles from './App.module.css';
import Entry from './Entry';
import Signup from "./Auth/Signup";
import Login from "./Auth/Login";
import ExpenseList from ".ExpenseList";

function App() {
    return (
        <div>
            <div className={Styles.mainReturnDiv}>
                <Header />
            </div>
            <div className="app-wrapper">
                <Switch>
                    <Route className={Styles.viewDiv} Navbar/>
                    <Route className={Styles.viewDiv} Entry/>
                    <Route className={Styles.viewDiv} View/>
                    <Route path="/signup" component={Signup}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/expenses" component={ExpenseList}/>
                    <Route exact path="/" render={() => <Redirect to="/expenses"/>}/>
                </Switch>
            </div>
            <div className={Styles.mainReturnDiv}>
                <Footer />
            </div>
        </div>
    )
}

export default App;
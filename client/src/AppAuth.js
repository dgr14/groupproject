import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import Navbar from "./Navbar";
import Signup from "./Auth/Signup";
import Login from "./Auth/Login";
import ExpenseList from "./Todos/ExpenseList";

function App() {
    return (
        <div className="app-wrapper">
            <Navbar/>
            <Switch>
                <Route path="/signup" component={Signup}/>
                <Route path="/login" component={Login}/>
                <Route path="/expenses" component={ExpenseList}/>
                <Route exact path="/" render={() => <Redirect to="/expenses"/>}/>
            </Switch>
        </div>
    )
}

export default App;
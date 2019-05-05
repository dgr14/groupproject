import React from 'react';
import { Route, Switch, Link, Redirect } from "react-router-dom";
// import Header from './Header';
// import Navbar from './Navbar';
import View from './View';
// import Footer from './Footer';
// import Entry from './Entry';
import Styles from './App.module.css';
import MainView from './MainView';
import Signup from "./auth/Signup";
import Login from "./auth/Login";
// import ProtectedRoute from "./auth/ProtectedRoute";
// import ExpenseList from './components/ExpenseList';

function App(props) {
    return (
        <div>
            <div className="app-wrapper">
                <Route exact path={"/"} render={() => !props.token ? <Login page /> : <MainView />} />
                <Signup />
            </div>
            <nav className="login-wrapper">
            {
                !props.token ?
                    <>
                        <div>
                            <Link to="/signup">Sign Up</Link><br></br>
                            <Link render={() => !props.token ? <Login /> : <View />}>Sign Up!</Link>
                        </div>
                        <div>
                            <Link to="/login">Log In</Link>
                        </div>
                    </>
                :
                    <>
                        <div>
                            <Link to="/Expenses">Expenses</Link>
                        </div>
                        <div>
                            <button onClick={() => props.logout()}>Logout</button>
                        </div>
                    </>
            }
            </nav>
                <Switch>
                    {/* <Route className={Styles.viewDiv} Navbar/> */}
                    {/* <Route className={Styles.viewDiv} Entry/> */}
                    {/* <Route className={Styles.viewDiv} View/> */}
                    {/* <Route path="/signup" component={Signup}/> */}
                    {/* <Route path="/login" component={Login}/> */}
                    {/* <Route path="/expenses" component={ExpenseList}/> */}
                    {/* <ProtectedRoute path="/expenses" component={ExpenseList}/> */}
                    {/* <Route exact path="/" render={() => <Redirect to="/expenses"/>}/> */}
                </Switch>
                <MainView />
        </div>
    )
}

export default App;

{/* 

`<Route exact path={"/"} render={() => !props.token ? <Login page /> : <Redirect />} />`
`<Route exact path={"/"} render={() => !props.token ? <Login page /> : <View />} />`
                    

                <Switch>
                    <Signup />
                    <Login />
                    <ExpenseList />
                    <Route exact path="/" render={() => !token ? <Login page /> : <Redirect to="/expenses"/>}/>
                </Switch>

*/}
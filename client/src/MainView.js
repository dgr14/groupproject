import React, { Component } from 'react';
import Header from './Header';
import Navbar from './Navbar';
import View from './View';
import Footer from './Footer';
import Styles from './App.module.css';
import Entry from './Entry';
import { withContext } from "./AppContext"
import { Switch, Route } from "react-router-dom"
import Expense from './components/ExpenseView';

// import ExpenseList from './components/ExpenseList';

class MainView extends Component {
  constructor(){
    super()
      this.state = {
        toggle: false
      }
  }
  toggler = () => {
    this.setState(prevState => ({
      toggle: !prevState.toggle
    }))
  }
  render(){
    return (
      <div className={Styles.mainReturnDiv}>
        <Header toggler = {this.toggler} />
        <div>
          
        </div>
        <Navbar toggle={this.state.toggle} />
        <div className={Styles.viewDiv}>
        <Switch>
          <Route path = "/expenses/entry" component = {Entry} />
          <Route path = "/expenses/expense" component = {Expense} />
        
        </Switch>
        </div>

        <Footer />
      </div>
    );
  }
}

export default withContext(MainView)
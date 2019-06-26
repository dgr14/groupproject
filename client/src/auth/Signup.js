import React, { Component } from 'react';
import { withContext } from "../AppContext"
import Styles from "./Signup.module.css"

class Signup extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            errorMessage: ""
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    clearInputs = () => {
        this.setState({
            username: "",
            password: "",
            errorMessage: ""
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signup(this.state)
            .then(() => this.props.history.push("/expenses/entry"))
            .catch(err => {
                // this.setState({errorMessage: err.response.data.message})
            })
    }
/*
        .then(() => this.clearInputs())
        .catch(err => {
            this.setState({errorMessage: err.data})
        })
}
*/
    render() {
        return (
            <div className={Styles.formWrapper}>
                <form onSubmit={this.handleSubmit}>
                    <h3 className={Styles.signupHeader}>Sign Up</h3>
                    <div className={Styles.inputLoginWrapper}>
                        <input
                            onChange={this.handleChange}
                            value={this.state.username}
                            name="username"
                            type="text"
                            placeholder="Username"/>
                        <input
                            onChange={this.handleChange}
                            value={this.state.password}
                            name="password"
                            type="password"
                            placeholder="Password"/>
                    </div>
                    <button className={Styles.signupButton} type="submit">Create Account</button>
                </form>

                {
                    this.state.errorMessage &&
                    <p style={{color: "red"}}>{this.state.errorMessage}</p>
                }

            </div>
        )
    }
}

export default withContext(Signup);
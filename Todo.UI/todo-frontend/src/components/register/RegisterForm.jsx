import React, { Component } from 'react'

export default class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            confirmPsw: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    };

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <h1>Register to start!!</h1>
                <div class="form-group">
                    <label for="username">Username</label>
                    <input
                     value={this.state.username}
                     onChange={this.onChange}
                     type="username"
                     class="form-control"
                     name="username"/>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input
                     value={this.state.email}
                     onChange={this.onChange}
                     type="email"
                     class="form-control"
                     name="email"/>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input
                     value={this.state.password}
                     onChange={this.onChange}
                     type="password"
                     class="form-control"
                     name="password"/>
                </div>
                <div class="form-group">
                    <label for="confirmPsw">Confirm Password</label>
                    <input
                     value={this.state.confirmPsw}
                     onChange={this.onChange}
                     type="password"
                     class="form-control"
                     name="confirmPsw"/>
                </div>
                <button type="submit" class="btn btn-primary">Register</button>
            </form>
        )
    }
}

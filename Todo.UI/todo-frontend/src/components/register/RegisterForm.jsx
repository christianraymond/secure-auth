import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
       this.props.userSignupRequestAction(this.state)
    }
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <h1>Register to start!!</h1>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                     value={this.state.username}
                     onChange={this.onChange}
                     type="username"
                     className="form-control"
                     placeholder="Your username"
                     name="username"/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                     value={this.state.email}
                     onChange={this.onChange}
                     type="email"
                     className="form-control"
                     placeholder="Your password"
                     name="email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                     value={this.state.password}
                     onChange={this.onChange}
                     type="password"
                     className="form-control"
                     placeholder="Your password"
                     name="password"/>
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPsw">Confirm Password</label>
                    <input
                     value={this.state.confirmPsw}
                     onChange={this.onChange}
                     type="password"
                     className="form-control"
                     placeholder="Confirm your password"
                     name="confirmPsw"/>
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        )
    }
}

RegisterForm.propTypes ={
    userSignupRequestAction : PropTypes.func.isRequired,
};

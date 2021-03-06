import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginActions } from '../../actions/loginActions';
import PropTypes from 'prop-types';
import { createBrowserHistory } from "history";
import { withRouter } from 'react-router-dom';


class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit = (e) => {
        const history = createBrowserHistory();
        e.preventDefault();
        try {
            this.props.loginActions(this.state)
                .then(() => {
                    this.props.history.push("/todo"); 
                })
                .catch(error => {
                    alert(error.message)
                })
        } catch (err) {
            alert(err)
        }
    };

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <h1 className="justify-content-center row">Login</h1>
                <div className="form-group">
                    <label htmlFor="email">Email / Username</label>
                    <input
                        value={this.state.email}
                        onChange={this.onChange}
                        type="email"
                        className="form-control"
                        placeholder="Your email"
                        name="email"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        value={this.state.password}
                        onChange={this.onChange}
                        type="password"
                        className="form-control"
                        placeholder="Your password"
                        name="password"
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary">
                    Login
            </button>
            </form>
        )
    }
}

LoginForm.contextTypes = {
    router: PropTypes.object.isRequired
}

export default withRouter(connect(null, { loginActions })(LoginForm));
import React, { Component } from "react";
import PropTypes from "prop-types";
import { createBrowserHistory } from "history";

export default class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPsw: "",
      error: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    const history = createBrowserHistory();
    const { password, confirmPsw } = this.state;

    e.preventDefault();
    if (password !== confirmPsw) {
      alert("Password don't match")
    } else {
      try {
        this.props.userSignupRequestAction(this.state)
          .then(() => {
            this.props.addFlashMessageAction({
              type: 'success',
              text: 'You signed up successfully. Welcome!'
            });
            // history.push('/todo')
            window.location.replace('/todo')
          })
          .catch(error => {
            alert(error.message)
          })
      } catch (err) {
        console.log(err)
      }
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <h1 className="justify-content-center row">Register</h1>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              value={this.state.username}
              onChange={this.onChange}
              type="username"
              className="form-control"
              placeholder="Your username"
              name="username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
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
          <div className="form-group">
            <label htmlFor="confirmPsw">Confirm Password</label>
            <input
              value={this.state.confirmPsw}
              onChange={this.onChange}
              type="password"
              className="form-control"
              placeholder="Confirm your password"
              name="confirmPsw"
            />
          </div>
          <button type="submit" className="btn btn-primary">Register</button>
        </form>
      </div>
    );
  }
}

RegisterForm.propTypes = {
  userSignupRequestAction: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired
};

RegisterForm.contextType = {
  router: PropTypes.object.isRequired
}

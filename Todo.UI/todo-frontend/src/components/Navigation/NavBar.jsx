import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/loginActions'

class NavBar extends React.Component {
  logout = (e) => {
    e.preventDefault();
    this.props.logout()
  }
  render() {
    const { isAuthenticated } = this.props.auth;

    const userLinks = (
      <ul class="nav navbar-nav ml-auto">
        <li class="nav-item"><a href="#" class="nav-link" onClick={this.logout.bind(this)}>Logout</a></li>
      </ul>
    )

    const guestLink = (
      <ul className="nav navbar-nav ml-auto">
        <li class="nav-item"><a class="nav-link" id="active1" href="/register">Register</a></li>
        <li class="nav-item"><a class="nav-link" id="active2" href="/login">Login</a></li>
      </ul>
    )
    return (
      <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <div class="container-fluid">
          <span><a className="nav-link" href="/">Logo</a></span>
          <button class="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"><span class="dark-blue-text">
            <i class="fa fa-bars fa-1x"></i></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent1">
            {isAuthenticated ? userLinks : guestLink}
          </div>
        </div>
      </nav>
    );
  }
};

NavBar.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, { logout})(NavBar);
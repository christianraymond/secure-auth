import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addFlashMessageAction } from "../actions/addFlashMessageAction";

export default function (ComposedComponent) {
  class ProtectRoute extends React.Component {
    componentWillMount() {
      if (!this.props.isAuthenticated) {
        this.props.addFlashMessageAction({
          type: "error",
          text: "You need to login to access this page",
        });
        window.location.replace("/");
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.isAuthenticated) {
        this.context.router.push("/");
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  ProtectRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    addFlashMessageAction: PropTypes.func.isRequired,
  };

  ProtectRoute.contextTypes = {
    router: PropTypes.object.isRequired,
  };

  function mapStateToProps(state) {
    return {
      isAuthenticated: state.auth.isAuthenticated,
    };
  }

  return connect(mapStateToProps, { addFlashMessageAction })(ProtectRoute);
}

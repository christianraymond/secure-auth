import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import NavItem from "./NavItem/NavItem";

import { logout } from "../../../IsAuth/isAuthenticated";

const Nav = styled.nav`
  display: flex;
  margin-top: ${(props) => (props.mobile ? "-6rem" : null)};
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: ${(props) => (props.mobile ? "column" : "row")};
  align-items: center;
  height: 100%;
`;

const NavItems = (props) => {
  const { isLoggedIn } = props.auth;

  let privateLink = (
    <Ul mobile={props.mobile}>
      <NavItem mobile={props.mobile} clicked={props.clicked} link="/todos">
        Todos
      </NavItem>
      <button onClick={props.logout}>Logout </button>
    </Ul>
  );
  let guestLink = (
    <Ul mobile={props.mobile}>
      <NavItem mobile={props.mobile} clicked={props.clicked} link="/login">
        Login
      </NavItem>
      <NavItem mobile={props.mobile} clicked={props.clicked} link="/signup">
        Signup
      </NavItem>
    </Ul>
  );
  return isLoggedIn ? (
    <Nav mobile={props.mobile}>{privateLink}</Nav>
  ) : (
    <Nav mobile={props.mobile}>{guestLink}</Nav>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    isLoggedIn: state.auth,
  };
};

export default connect(mapStateToProps, {logout})(NavItems);

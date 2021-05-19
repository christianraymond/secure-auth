import React, { useEffect } from "react";
import { createBrowserHistory } from "history";
import { connect } from "react-redux";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

import { FormWrapper, StyledForm } from "../../../hoc/layout/elements";
import Input from "../../../components/UI/Forms/Input/Input";
import Button from "../../../components/UI/Forms/Button/Button";
import Heading from "../../../components/UI/Headings/Heading";
import Message from "../../../components/UI/Message/Message";
import CustomLink from "../../../components/UI/CustomLink/CustomLink";

import * as actions from "../../../store/actions";

const MessageWrapper = styled.div`
  position: absolute;
  bottom: -2rem;
`;

const SignUpSchema = Yup.object().shape({
  username: Yup.string()
    .required("Your last name is required.")
    .min(3, "Too short.")
    .max(25, "Too long."),
  email: Yup.string()
    .email("Invalid email.")
    .required("The email is required."),
  password: Yup.string()
    .required("The passoword is required.")
    .min(8, "The password is too short."),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], `Password doesn't match`)
    .required("You need to confirm your password."),
});

const SignUp = ({ signUp, loading, error, cleanUp }) => {
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={SignUpSchema}
      onSubmit={async (userData, { setSubmitting }) => {
        await signUp(userData);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, isValid }) => (
        <FormWrapper>
          <Heading noMargin size="h1" color="white">
            Sign up for an account
          </Heading>
          <Heading bold size="h4" color="white">
            Fill in your details to register your new account
          </Heading>
          <StyledForm>
            <Field
              type="text"
              name="username"
              placeholder="Your username..."
              component={Input}
            />
            <Field
              type="email"
              name="email"
              placeholder="Your email..."
              component={Input}
            />
            <Field
              type="password"
              name="password"
              placeholder="Your password..."
              component={Input}
            />
            <Field
              type="password"
              name="confirmPassword"
              placeholder="Re-type your password..."
              component={Input}
            />
            <Button
              disabled={!isValid || isSubmitting}
              loading={loading ? "Signing you up..." : null}
              type="submit"
            >
              Sign up
            </Button>
            <CustomLink link="/login" color="white">
              Already have an account?
            </CustomLink>
            <MessageWrapper>
              <Message error show={error}>
                {error}
              </Message>
            </MessageWrapper>
          </StyledForm>
        </FormWrapper>
      )}
    </Formik>
  );
};

// const mapStateToProps = ({ auth }) => ({
//   loading: auth.loading,
//   error: auth.error,
// });

// const mapDispatchToProps = {
//   signUp: actions.signUp,
//   cleanUp: actions.clean,
// };

const mapDispatchToProps = (dispatch) => ({
  signUp: (userInfo) => dispatch(actions.signUp(userInfo)),
});

export default connect(null, mapDispatchToProps)(SignUp);

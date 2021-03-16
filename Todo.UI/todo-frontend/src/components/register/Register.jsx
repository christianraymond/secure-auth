import React from 'react';
import PropTypes from 'prop-types';

import RegisterForm from './RegisterForm';
import { connect } from 'react-redux';
import { userSignupRequestAction } from '../../actions/signupActions'

 class Register extends React.Component {
    render() {
        const { userSignupRequestAction } = this.props;
        return (
            <div className="justify-content-center row">
                <div className="col-md-4 col-md-offset-4">
                    <RegisterForm userSignupRequestAction={userSignupRequestAction} />
                </div>
            </div>
        )
    }
}

Register.propTypes ={
    userSignupRequestAction : PropTypes.func.isRequired,
};


export default connect(null, { userSignupRequestAction }) (Register);
import React from 'react';
import PropTypes, { nominalTypeHack } from 'prop-types';

import RegisterForm from './RegisterForm';
import { connect } from 'react-redux';
import { userSignupRequestAction } from '../../actions/signupActions';
import { addFlashMessage } from '../../actions/flashMessages'

 class Register extends React.Component {
    render() {
        const { userSignupRequestAction, addFlashMessage } = this.props;
        return (
            <div className="justify-content-center row">
                <div className="col-md-4 col-md-offset-4">
                    <RegisterForm userSignupRequestAction={userSignupRequestAction} addFlashMessage={addFlashMessage} />
                </div>
            </div>
        )
    }
}

Register.propTypes ={
    userSignupRequestAction : PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired
};


export default connect(null, { userSignupRequestAction, addFlashMessage }) (Register);
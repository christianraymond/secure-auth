import React from 'react';
import PropTypes, { nominalTypeHack } from 'prop-types';

import RegisterForm from './RegisterForm';
import { connect } from 'react-redux';
import { userSignupRequestAction } from '../../actions/signupActions';
import { addFlashMessageAction } from '../../actions/addFlashMessageAction'

 class Register extends React.Component {
    render() {
        const { userSignupRequestAction, addFlashMessageAction } = this.props;
        return (
            <div className="justify-content-center row">
                <div className="col-md-4 col-md-offset-4">
                    <RegisterForm userSignupRequestAction={userSignupRequestAction} addFlashMessageAction={addFlashMessageAction} />
                </div>
            </div>
        )
    }
}

Register.propTypes ={
    userSignupRequestAction : PropTypes.func.isRequired,
    addFlashMessageAction: PropTypes.func.isRequired
};


export default connect(null, { userSignupRequestAction, addFlashMessageAction }) (Register);
// import axios from 'axios';

import fire from '../config/fire'

export const userSignupRequestAction = ({ email, password }) => {
    return (dispatch) => {
     return fire.auth().createUserWithEmailAndPassword(email, password)
    };
};



// import axios from 'axios';

import fire from '../config/fire'

export const loginActions = ({ email, password }) => {
    return (dispatch) => {
     return fire.auth().signInWithEmailAndPassword(email, password)
    };
};

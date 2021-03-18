// import axios from 'axios';

import { func } from 'prop-types';
import fire from '../config/fire';
import isAuthenticated from '../utils/isAuthenticated';
import { SET_CURRENT_USER } from './types';

export const setCurrentUser = (user) => {
    return {
        type: SET_CURRENT_USER,
        user
    }
}
export const logout = () => {
    return dispatch => {
        localStorage.removeItem('JwtToken');
        isAuthenticated(false);
        dispatch(setCurrentUser({}))
    }
}
export const loginActions = ({ email, password }) => {
    return (dispatch) => {
        return fire.auth().signInWithEmailAndPassword(email, password).then(user => {
            fire.auth().currentUser.getIdToken().then(token => {
                localStorage.setItem('JwtToken', token);
                isAuthenticated(token);
                dispatch(setCurrentUser(token))
            })
        })
    };
};

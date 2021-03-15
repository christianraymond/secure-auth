import axios from 'axios';


export function userSignupRequestAction(userData){
    return dispatch => {
        return axios.post('/api/users', userData)
    }
}
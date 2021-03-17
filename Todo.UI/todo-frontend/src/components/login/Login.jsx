import React, { Component } from 'react'
import LoginForm from './LoginForm'

export default class Login extends Component {
    render() {
        return (
            <div className="justify-content-center row">
            <div className="col-md-4 col-md-offset-4">
                <LoginForm />
            </div>
        </div>
        )
    }
}

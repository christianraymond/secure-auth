import React from 'react'

function Landing() {
    return (
        <div className="justify-content-center row">
            <div className="banner signup p-y-3">
                <div className="wrapper">
                    <h2 className="m-b-2 display-5 text-uppercase">Welcome </h2>
                    <p className="m-b-2 display-5 text-uppercase">To get started, please</p>
                    <a href="/register" className="btn btn-primary btn-lg btn-block" data-toggle="modal" data-target="#signup_form_modal">Sign up</a>
                </div>
            </div>
        </div>
    )
}

export default Landing

import React from 'react';
import { Link } from 'react-router-dom'

export default function Todo() {
    return (
       <div className="jumbotron">
         <div>
            <h3>You are Logged in !</h3>
            <button className="btn btn-warning"><Link to="/register">Logout</Link></button>
         </div>
       </div>
    )
}

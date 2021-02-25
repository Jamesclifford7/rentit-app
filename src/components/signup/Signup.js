import React from 'react'
import Nav from '../navbar/Nav'
import './Signup.css'

function Signup(props) {
    return (
        <>
            <Nav isLoggedIn={props.isLoggedIn} />
            <main>
                <div className="signup-form">
                    <h1>Sign Up</h1>
                    <form onSubmit={event => props.handleSignup(event)}>
                        <label htmlFor="email">Email:</label><br/>
                        <input type="text" id="email" required /><br/>
                        <label htmlFor="password">Password:</label><br/>
                        <input type="password" id="password" required /><br/>
                        <button type="submit">Sign Up</button>
                    </form>
                    <p>*Password must include one uppercase letter, number, and be at least 6 characters long</p>
                </div>
                {/* 
                    props.signupMessage
                    ? <div><p>{props.signupMessage}</p></div>
                    : null
                */}
            </main>
            <footer>
                <span> &#169; Rentit 2021</span>
            </footer>
        </>
    )
}

export default Signup
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
                        <label htmlFor="email">Email:</label>
                        <input type="text" id="email"  />
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password"  />
                        <button type="submit">Sign Up</button>
                    </form>
                    <p>*Password must include one uppercase letter, number, and be at least 6 characters long</p>
                </div>
                {
                    props.signupMessage
                    ? <p>{props.signupMessage}</p>
                    : null
                }
            </main>
            <footer>
                <span> &#169; Rentit 2021</span>
            </footer>
        </>
    )
}

export default Signup
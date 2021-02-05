import React from 'react'
import Nav from '../navbar/Nav'
import './Login.css'

function Login(props) {
    return (
        <>
            <Nav isLoggedIn={props.isLoggedIn} />
            <main>
                <div className="login-form">
                    <h1>Login</h1>
                    <form onSubmit={event => props.handleLogin(event)}>
                        <label htmlFor="email">Email or Username:</label>
                        <input type="text" id="email" /><br />
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" /><br/>
                        <button type="submit">Login</button>
                    </form>
                </div>
            </main>
            <footer>
                <span> &#169; Rentit 2021</span>
            </footer>
        </>
    )
}

export default Login
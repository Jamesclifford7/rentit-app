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
                        <label htmlFor="input">Email or Username:</label>
                        <input type="text" id="input" required /><br />
                        <label htmlFor="password">Password:</label><br/>
                        <input type="password" id="password" required /><br/>
                        <h5>Demo Email:</h5><p>johnsmith@gmail.com</p><br/>
                        <h5>Demo Password:</h5><p>Smithjohn11</p>
                        <button type="submit">Login</button>
                    </form>
                    {
                        props.loginMessage
                        ? <div className="login-message">
                            <p>{props.loginMessage}</p>
                        </div>
                        : null
                    }
                </div>
            </main>
            <footer>
                <span> &#169; Rentit 2021</span>
            </footer>
        </>
    )
}

export default Login
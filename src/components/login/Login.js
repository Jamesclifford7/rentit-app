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
                        <input type="text" id="input" /><br />
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" /><br/>
                        <h5>Demo Email:</h5><p>johnsmith@gmail.com</p><br/>
                        <h5>Demo Password:</h5><p>Smithjohn11</p>
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
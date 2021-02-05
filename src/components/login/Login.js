import React from 'react'
import Nav from '../navbar/Nav'
import './Login.css'

function Login() {
    return (
        <>
            <Nav />
            <main>
                <div class="login-form">
                    <h1>Login</h1>
                    <form>
                        <label for="email">Email or Username:</label>
                        <input type="text" id="email"  /><br />
                        <label for="password">Password:</label>
                        <input type="text" id="password"  /><br/>
                        <button>Login</button>
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
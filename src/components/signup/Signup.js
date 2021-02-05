import React from 'react'
import Nav from '../navbar/Nav'
import { Link } from 'react-router-dom'
import './Signup.css'

function Signup() {
    return (
        <>
            <Nav />
            <main>
                <div class="signup-form">
                    <h1>Sign Up</h1>
                    <form>
                        <label for="email">Email:</label>
                        <input type="text" id="email"  />
                        <label for="password">Password:</label>
                        <input type="text" id="password"  />
                        <button>Sign Up</button>
                    </form>
                </div>
            </main>
            <footer>
                <span> &#169; Rentit 2021</span>
            </footer>
        </>
    )
}

export default Signup
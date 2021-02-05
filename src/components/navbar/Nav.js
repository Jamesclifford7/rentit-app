import React from 'react'
import './Nav.css'

class Nav extends React.Component {
    render() {
        return (
            <header>
                <h2>Rentit</h2>
                <nav>
                    <ul>
                        <li>Sign Up</li>
                        <li>Login</li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Nav
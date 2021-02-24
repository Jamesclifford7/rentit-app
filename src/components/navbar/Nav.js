import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

class Nav extends React.Component {
    constructor() {
        super(); 
        this.state = {
            showMenu: false
        }
    }

    // your profile
    // search
    // list
    // logout

    toggleMenu = (event) => {
        event.preventDefault(); 
        this.setState(prevState => ({
            showMenu: !prevState.showMenu
        }))
    }

    render() {
        if (this.props.isLoggedIn) {
            return (
                <header>
                    <h2><Link to="/search">Rentit</Link></h2>
                    <nav>
                        <ul>
                            <li><button onClick={event => this.toggleMenu(event)}><img src="https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png" height="30" width="auto" alt="avatar" /></button></li>
                            {
                                this.state.showMenu
                                ? <CSSTransition
                                in={this.state.showMenu}
                                timeout={2000}
                                classNames="display"
                                unmountOnExit>
                                    <div className="dropdown-container">
                                        <div className="dropdown-triangle"></div>
                                        <div className="dropdown">
                                            <Link to="/profile">Your Profile</Link><br/>
                                            <Link to="/search">Search</Link><br/>
                                            <Link to="/listitem">List</Link><br/>
                                            <button onClick={event => this.props.handleLogout(event)}>Logout</button>
                                        </div>
                                    </div>
                                </CSSTransition>
                                : null
                            }
                        </ul>
                    </nav>
                </header>
            )
        } else {
            return (
                <header>
                    <h2><Link to="/">Rentit</Link></h2>
                    <nav>
                        <ul>
                            <li><Link to="/signup">Sign Up</Link></li>
                            <li><Link to="/login">Login</Link></li>
                        </ul>
                    </nav>
                </header>
            )
        }
    }
}

export default Nav
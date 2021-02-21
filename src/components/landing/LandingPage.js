import React from 'react'
import Nav from '../navbar/Nav'
import './LandingPage.css'
import { Link } from 'react-router-dom'

function LandingPage(props) {
    return (
        <>
            <Nav props={props} isLoggedIn={props.isLoggedIn} />
            <main>
            <section className="landing">
                <div className="landing-container">
                    <h1>Looking to spend less and save more? Rent, don't buy.</h1>
                    <h3>Welcome to Rentit: a platform where you can rent local items from others in your community.</h3>
                </div>
            </section>
            <section className="about">
                <div className="about-container">
                    <h1>Our Mission</h1>
                    <p>To provide a quick and easy way for people to rent items from other users in their neighborhood. From AC units to camping equipment, reduce clutter and empower your neighbors by borrowing instead of owning.</p>
                </div>
            </section>
            <section className="demo">
                <div className="demo-container">
                    <div className="demo-item">
                        <h3>Create an Account</h3>
                        <p>Choose your city to start searching.</p>
                    </div>
                    <div className="demo-item">
                        <h3>Search</h3>
                        <p>Find items to rent.</p>
                    </div>
                    <div className="demo-item">
                        <h3>Rent and return</h3>
                        <p>Confirm your rental, pick it up, and return when rental period is up.</p>
                    </div>
                    <div className="demo-item">
                        <h3>List your items</h3>
                        <p>Looking to make some extra cash on the side? Rent out your belongings!</p>
                    </div>
                </div>
            </section>
            <section className="signup">
                <div className="signup-container">
                    <h1>Sign Up</h1>
                    <div className="signup-flex-container">
                        <div className="signup-left">
                            <h3>Get started today:</h3>
                            <button><Link to="/signup">Sign Up</Link></button>
                        </div>
                        <div className="signup-right">
                        </div>
                    </div>
                </div>
            </section>
            </main>
            <footer>
                <span> &#169; Rentit 2021</span>
            </footer>
        </>
    )
}

export default LandingPage
import React from 'react'
import Nav from '../navbar/Nav'
import './LandingPage.css'
import { Link } from 'react-router-dom'

function LandingPage() {
    return (
        <>
            <Nav/>
            <main>
            <section class="landing">
                <div class="landing-container">
                    <h1>Looking to spend less and save more? Rent, don't buy.</h1>
                    <h3>Welcome to Rentit: a platform where you can rent local items from others in your community.</h3>
                </div>
            </section>
            <section class="about">
                <div class="about-container">
                    <h1>Our Mission</h1>
                    <p>To provide a quick and easy way for people to rent items from other users in their neighborhood. From AC units to camping equipment, reduce clutter and empower your neighbors by borrowing instead of owning.</p>
                </div>
            </section>
            <section class="demo">
                <div class="demo-container">
                    <div class="demo-item">
                        <h3>Create an Account</h3>
                        <p>Choose your city to start searching.</p>
                    </div>
                    <div class="demo-item">
                        <h3>Search</h3>
                        <p>Find your items to rent.</p>
                    </div>
                    <div class="demo-item">
                        <h3>Rent and return</h3>
                        <p>Confirm your rental, pick it up, and return when rental period is up.</p>
                    </div>
                    <div class="demo-item">
                        <h3>List your own items for rent</h3>
                        <p>Looking to make some extra cash on the side? Rent out your belongings!</p>
                    </div>
                </div>
            </section>
            <section class="signup">
                <div class="signup-container">
                    <h1>Sign Up</h1>
                    <div class="signup-flex-container">
                        <div class="signup-left">
                            <h3>Get started today:</h3>
                            <button><Link to="/signup">Sign Up</Link></button>
                        </div>
                        <div class="signup-right">
                            <span>(image)</span>
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
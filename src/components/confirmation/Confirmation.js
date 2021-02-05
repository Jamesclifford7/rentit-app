import React from 'react'
import Nav from '../navbar/Nav'
import './Confirmation.css'

function Confirmation() {
    return (
        <>
            <Nav />
            <main>
                <div class="confirmation">
                    <h1>Your Rental Order is Confirmed!</h1>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/1200px-Eo_circle_green_checkmark.svg.png" height="300" width="auto" alt="checkmark" />
                    <h2>Item Name</h2>
                    <h3>Rental Period</h3>
                    <h3>Pickup/Dropoff Location</h3>
                    <button>Back to Search</button>
                </div>
            </main>
            <footer>
                <span> &#169; Rentit 2021</span>
            </footer>
        </>
    )
}

export default Confirmation
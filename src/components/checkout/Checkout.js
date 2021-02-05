import React from 'react'
import Nav from '../navbar/Nav'
import './Checkout.css'

function Checkout() {
    return (
        <>
            <Nav />
            <main>
                <div class="checkout">
                    <h1>Checkout</h1>
                    <h3>You Are About to Rent the Following Item:</h3>
                    <img src="https://www.pngitem.com/pimgs/m/568-5680053_prod-placeholder-vector-product-icon-png-transparent-png.png" height="300" width="auto" />
                    <h2>Item Name</h2>
                    <h3>From: User</h3>
                    <h3>Location</h3>
                    <p>Daily Cost: $10</p>
                    <p>Monthly Cost: $100</p>
                    <p>Description</p>
                    <form>
                        <fieldset>
                            <legend><h2>Choose Rental Period</h2></legend>
                            <label for="pickupdate">Pickup Date</label>
                            <input id="pickupdate" type="date"/>
                            <label for="returndate">Return Date</label>
                            <input id="returndate" type="date"/><br/>
                        </fieldset><br/>
                        <fieldset class="creditcard">
                            <legend><h2>Enter Credit Card Info</h2></legend>
                            <label for="ccnumber">Credit Card Number:</label>
                            <input id="ccnumber" type="text" /><br/>
                            <label for="expiration">Expiration Date:</label>
                            <input id="expiration" type="text" /><br/>
                            <label for="securitycode">Security Code:</label>
                            <input id="securitycode" type="text" />
                        </fieldset>
                        <button type="submit">Rent</button>
                    </form>
                </div>
            </main>
            <footer>
                <span> &#169; Rentit 2021</span>
            </footer>
        </>
    )
}

export default Checkout
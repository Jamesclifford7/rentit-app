import React from 'react'
import Nav from '../navbar/Nav'
import './Item.css'

function Item(props) {
    return (
        <>
            <Nav isLoggedIn={props.isLoggedIn} handleLogout={props.handleLogout} />
            <main>
                <div className="item">
                    <h1>Item Name</h1>
                    <img src="https://www.pngitem.com/pimgs/m/568-5680053_prod-placeholder-vector-product-icon-png-transparent-png.png" height="500" width="auto" />
                    <h3>User</h3>
                    <h3>Location</h3>
                    <p>Daily Cost: $10</p>
                    <p>Monthly Cost: $100</p>
                    <p>Description</p>
                    <button>Rent Item</button><br />
                    <button>Back to Search</button>
                </div>
            </main>
            <footer>
                <span> &#169; Rentit 2021</span>
            </footer>
        </>
    )
}

export default Item
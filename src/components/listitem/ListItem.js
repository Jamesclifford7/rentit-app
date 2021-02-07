import React from 'react'
import Nav from '../navbar/Nav'
import './ListItem.css'

function ListItem(props) {
    return (
        <>
            <Nav isLoggedIn={props.isLoggedIn} handleLogout={props.handleLogout} />
            <main>
                <div className="list-item">
                    <h1>List an Item to Rent</h1>
                    <img src="https://www.pngitem.com/pimgs/m/568-5680053_prod-placeholder-vector-product-icon-png-transparent-png.png" height="200" width="auto" /><br/>
                    <button>Upload Image</button>
                    <form onSubmit={event => props.handleListItem(event)}>
                        <label htmlFor="itemname">Item Name:</label>
                        <input id="itemname" type="text" /><br/>
                        <label htmlFor="itemcategory">Item Category:</label>
                        <select id="itemcategory">
                            <option value="1">Household Appliance</option>
                            <option value="2">Tools</option>
                            <option value="3">Athletic Equipment</option>
                            <option value="4">Outdoor Equipment</option>
                            <option value="5">Other</option>
                        </select><br/>
                        <label htmlFor="dailycost">Daily Cost:</label>
                        <input id="dailycost" type="text"/><br/>
                        <label htmlFor="weeklycost">Weekly Cost:</label>
                        <input id="weeklycost" type="text"/><br/>
                        <label htmlFor="description">Description:</label>
                        <textarea id="description" type="text"/><br/>
                        <button type="submit">List</button>
                    </form>
                </div>
            </main>
            <footer>
                <span> &#169; Rentit 2021</span>
            </footer>
        </>
    )
}

export default ListItem
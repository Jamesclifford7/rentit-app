import React from 'react'
import Nav from '../navbar/Nav'
import './ListItem.css'

function ListItem() {
    return (
        <>
            <Nav />
            <main>
                <div class="list-item">
                    <h1>List an Item to Rent</h1>
                    <img src="https://www.pngitem.com/pimgs/m/568-5680053_prod-placeholder-vector-product-icon-png-transparent-png.png" height="200" width="auto" /><br/>
                    <button>Upload Image</button>
                    <form>
                        <label for="itemname">Item Name:</label>
                        <input id="itemname" type="text" /><br/>
                        <label for="itemcategory">Item Category:</label>
                        <select id="itemcategory">
                            <option value="appliance">Household Appliance</option>
                            <option value="tools">Tools</option>
                            <option value="athletic">Athletic Equipment</option>
                            <option value="other">Other</option>
                        </select><br/>
                        <label for="dailycost">Daily Cost:</label>
                        <input id="dailycost" type="text"/><br/>
                        <label for="monthlycost">Monthly Cost:</label>
                        <input id="monthlycost" type="text"/><br/>
                        <button>List</button>
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
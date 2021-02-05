import React from 'react'
import Nav from '../navbar/Nav'
import './SearchResults.css'

function SearchResults() {
    return (
        <>
            <Nav />
            <main>
                <div class="search-results">
                    <h1>Search</h1>
                    <form>
                        <label for="search">Search For:</label>
                        <input id="search" type="text"/>
                        <label for="category">In Category:</label>
                        <select id="category">
                            <option value="appliance">Household Appliance</option>
                            <option value="tools">Tools</option>
                            <option value="athletic">Athletic Equipment</option>
                            <option value="other">Other</option>
                        </select>
                        <label for="city">In City:</label>
                        <select id="city">
                            <option value="la">Los Angeles</option>
                            <option value="ny">New York</option>
                            <option value="chicago">Chicago</option>
                        </select>
                        <button>Find</button>
                    </form>
                </div>
                <div class="results">
                    <div class="result">
                        <img src="https://www.pngitem.com/pimgs/m/568-5680053_prod-placeholder-vector-product-icon-png-transparent-png.png" height="100px" width="auto" />
                        <div class="result-right">
                            <h3>Item Name</h3>
                            <p>Location</p>
                        </div>
                    </div>
                    <div class="result">
                        <img src="https://www.pngitem.com/pimgs/m/568-5680053_prod-placeholder-vector-product-icon-png-transparent-png.png" height="100px" width="auto" />
                        <div class="result-right">
                            <h3>Item Name</h3>
                            <p>Location</p>
                        </div>
                    </div>
                    <div class="result">
                        <img src="https://www.pngitem.com/pimgs/m/568-5680053_prod-placeholder-vector-product-icon-png-transparent-png.png" height="100px" width="auto" />
                        <div class="result-right">
                            <h3>Item Name</h3>
                            <p>Location</p>
                        </div>
                    </div>
                    <div class="result">
                        <img src="https://www.pngitem.com/pimgs/m/568-5680053_prod-placeholder-vector-product-icon-png-transparent-png.png" height="100px" width="auto" />
                        <div class="result-right">
                            <h3>Item Name</h3>
                            <p>Location</p>
                        </div>
                    </div>
                    <div class="result">
                        <img src="https://www.pngitem.com/pimgs/m/568-5680053_prod-placeholder-vector-product-icon-png-transparent-png.png" height="100px" width="auto" />
                        <div class="result-right">
                            <h3>Item Name</h3>
                            <p>Location</p>
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <span> &#169; Rentit 2021</span>
            </footer>
        </>
    )
}

export default SearchResults
import React from 'react'
import Nav from '../navbar/Nav'
import './Search.css'

function Search() {
    return (
        <>
            <Nav />
            <main>
                <div class="search">
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
            </main>
            <footer>
                <span> &#169; Rentit 2021</span>
            </footer>
        </>
    )
}

export default Search
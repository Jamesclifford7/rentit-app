import React from 'react'
import Nav from '../navbar/Nav'
import './Search.css'

function Search(props) {
    return (
        <>
            {
                !props.isLoggedin 
                ? <>
                    <Nav isLoggedIn={props.isLoggedIn} handleLogout={props.handleLogout} />
                    <main>
                        <div className="search">
                            <h1>Search</h1>
                            <form onSubmit={event => props.handleSearch(event)}>
                                <label htmlFor="search">Search For:</label>
                                <input id="search" type="text"/>
                                <label htmlFor="category">In Category:</label>
                                <select id="category">
                                    <option value="1">Household Appliance</option>
                                    <option value="2">Tools</option>
                                    <option value="3">Athletic Equipment</option>
                                    <option value="4">Outdoor Equipment</option>
                                    <option value="5">Other</option>
                                </select>
                                <label htmlFor="city">In City:</label>
                                <select id="city">
                                    <option value="Los Angeles">Los Angeles</option>
                                    <option value="New York">New York</option>
                                    <option value="Chicago">Chicago</option>
                                </select>
                                <button type="submit">Find</button>
                            </form>
                        </div>
                    </main>
                    <footer>
                        <span> &#169; Rentit 2021</span>
                    </footer>
                </>
                : <h1>Page not found</h1>
            }
        </>
    )
}

export default Search
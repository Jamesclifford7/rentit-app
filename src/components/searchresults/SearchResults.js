import React from 'react'
import Nav from '../navbar/Nav'
import './SearchResults.css'

function SearchResults(props) {
    // console.log(props.results)
    return (
        <>
            <Nav isLoggedIn={props.isLoggedIn} handleLogout={props.handleLogout} />
            <main>
                <div className="search-results">
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
                            <option value="4">Other</option>
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
                <div className="results">
                    {
                        props.results.map(result => {
                            return <div className="result">
                                <img src={result.img_url} height="100px" width="auto" />
                                <div className="result-right">
                                    <h3>{result.item_name}</h3>
                                    <p>{result.city}</p>
                                </div>
                            </div>
                        })
                    }
                </div>
            </main>
            <footer>
                <span> &#169; Rentit 2021</span>
            </footer>
        </>
    )
}

export default SearchResults

/*

<div className="result">
    <img src="https://www.pngitem.com/pimgs/m/568-5680053_prod-placeholder-vector-product-icon-png-transparent-png.png" height="100px" width="auto" />
    <div className="result-right">
        <h3>Item Name</h3>
        <p>Location</p>
    </div>
</div>

*/
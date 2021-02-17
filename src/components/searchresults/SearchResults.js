import React from 'react'
import Nav from '../navbar/Nav'
import './SearchResults.css'
import { Link } from 'react-router-dom'

function SearchResults(props) {
    // console.log(props.results)
    return (
        <>
            {
                props.isLoggedIn
                ? <>
                    <Nav isLoggedIn={props.isLoggedIn} handleLogout={props.handleLogout} />
                    <main>
                        <div className="search-results">
                            <h1>Search</h1>
                            <form onSubmit={event => props.handleSearch(event)}>
                                <label htmlFor="search">Search For:</label>
                                <input id="search" type="text"/>
                                <label htmlFor="category">In Category:</label>
                                <select id="category" defaultValue={props.searchValues.length ? props.searchValues[0] : null}>
                                    <option value="1">Household Appliance</option>
                                    <option value="2">Tools</option>
                                    <option value="3">Athletic Equipment</option>
                                    <option value="4">Outdoor Equipment</option>
                                    <option value="5">Other</option>
                                </select>
                                <label htmlFor="city">In City:</label>
                                <select id="city" defaultValue={props.searchValues.length ? props.searchValues[1] : null}>
                                    <option value="Los Angeles">Los Angeles</option>
                                    <option value="New York">New York</option>
                                    <option value="Chicago">Chicago</option>
                                </select>
                                <button type="submit">Find</button>
                            </form>
                        </div>
                        <div className="results">
                            { 
                            props.results[0]
                                ? props.results.map((result, idx) => {
                                    return <div className="result" key={idx}>
                                        <img src={result.img} height="120px" width="150px" alt="rental item search result" />
                                        <div className="result-right">
                                            <h3><Link to={`/item/${result.id}`}>{result.item_name}</Link></h3>
                                            <p>{result.city}</p>
                                        </div>
                                    </div>
                                })
                                : <div className="no-results">
                                    <h3>No items found</h3>
                                </div> 
                            }
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

export default SearchResults
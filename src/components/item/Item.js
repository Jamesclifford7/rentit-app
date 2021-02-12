import React from 'react'
import Nav from '../navbar/Nav'
import './Item.css'
import { Link } from 'react-router-dom'

class Item extends React.Component {

    backToSearch = (event) => {
        event.preventDefault(); 
        this.props.history.goBack(); 
    }

    render() {
        return (
            <>
                <Nav isLoggedIn={this.props.isLoggedIn} handleLogout={this.props.handleLogout} />
                <main>
                    {
                        this.props.results.map((item, idx) => {
                            if (item.id === parseInt(this.props.match.params.id)) {
                                return <div className="item" key={idx}>
                                            <h1>{item.item_name}</h1>
                                            <img src={item.img} height="500" width="auto" alt="rental item" />
                                            <h3>Owner: {item.owner_username}</h3>
                                            <h3>{item.city}</h3>
                                            <p>Daily Cost: ${item.daily_cost}</p>
                                            <p>Weekly Cost: ${item.weekly_cost}</p>
                                            <h3>Item Info</h3>
                                            <p>{item.item_description}</p>
                                            <Link to={`/checkout/${item.id}`}>Rent Item</Link><br />
                                            <button onClick={event => this.backToSearch(event)}>Back to Search</button>
                                        </div>
                            } else {
                                return null
                            }
                        })
                    }
                </main>
                <footer>
                    <span> &#169; Rentit 2021</span>
                </footer>
            </>
        )
    }
}

export default Item
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
                                            <img src={item.img_url} height="500" width="auto" alt="rental item" />
                                            <h3>Owner: {item.owner}</h3>
                                            <h3>{item.city}</h3>
                                            <p>Daily Cost: ${item.daily_cost}</p>
                                            <p>Weekly Cost: ${item.weekly_cost}</p>
                                            <h3>Item Info</h3>
                                            <p>{item.description}</p>
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

/*

function Item(props) {
    console.log(props)
    return (
        <>
            <Nav isLoggedIn={props.isLoggedIn} handleLogout={props.handleLogout} />
            <main>
                {
                    props.results.map((item, idx) => {
                        if (item.id == props.match.params.id) {
                            return <div className="item" key={idx}>
                                        <h1>{item.item_name}</h1>
                                        <img src={item.img_url} height="500" width="auto" />
                                        <h3>{item.owner}</h3>
                                        <h3>{item.city}</h3>
                                        <p>Daily Cost: ${item.daily_cost}</p>
                                        <p>Weekly Cost: ${item.weekly_cost}</p>
                                        <p>Description</p>
                                        <button>Rent Item</button><br />
                                        <button>Back to Search</button>
                                    </div>
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

---------------------------------------------------------------------------

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

*/
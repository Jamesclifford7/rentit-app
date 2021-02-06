import React from 'react'
import Nav from '../navbar/Nav'
import './Confirmation.css'
import { Link } from 'react-router-dom'

function Confirmation(props) {
    return (
        <>
            <Nav isLoggedIn={props.isLoggedIn} handleLogout={props.handleLogout} />
            <main>
                {
                    props.user.rental_history.map((item, idx) => {
                        if (item.id == props.match.params.id) {
                            return <div className="confirmation" key={idx}>
                                        <h1>Your Order is Confirmed!</h1>
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/1200px-Eo_circle_green_checkmark.svg.png" height="300" width="auto" alt="checkmark" />
                                        <h2>{item.item_name}</h2>
                                        <img src={item.img_url} height="200" width="auto" alt="item" />
                                        <h3>Rental Period</h3>
                                        <p>{item.rental_start} to {item.rental_end}</p>
                                        <h3>Pickup/Dropoff Location</h3>
                                        <p>1000 Hill St. <br/> {item.city}, {item.city == 'Los Angeles' ? 'CA' : item.city == 'New York' ? 'NY' : item.city == 'Chicago' ? 'IL' : null}</p>
                                        <Link to='/search'>Back to Search</Link>
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

export default Confirmation

/*

<div className="confirmation">
    <h1>Your Rental Order is Confirmed!</h1>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/1200px-Eo_circle_green_checkmark.svg.png" height="300" width="auto" alt="checkmark" />
    <h2>Item Name</h2>
    <h3>Rental Period</h3>
    <h3>Pickup/Dropoff Location</h3>
    <button>Back to Search</button>
</div>

*/
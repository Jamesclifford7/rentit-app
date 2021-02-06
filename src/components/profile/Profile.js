import React from 'react'
import Nav from '../navbar/Nav'
import './Profile.css'
import { Link } from 'react-router-dom'

function Profile(props) {
    return (
        <>
            <Nav isLoggedIn={props.isLoggedIn} handleLogout={props.handleLogout} />
            <main>
                <div className="profile-container">
                <div className="profile-left">
                    <div className="profile">
                        <img src="https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png" height="250" width="auto" alt="profile icon" /><br/>
                        <h1>{props.user.name}</h1>
                        <Link to="/editprofile">Edit Profile</Link>
                        <h3>{props.user.username}</h3>
                        <h3>{props.user.city}</h3>
                    </div>
                    <div className="listings">
                        <h2>My Listings</h2>
                        {
                            props.user.listed_items.map((item, idx) => {
                                return <div className="listing" key={idx}>
                                            <h4>{item.item_name}</h4>
                                        </div>
                            })
                        }
                    </div>
                </div>
                <div className="profile-right">
                    <h2>Rental History</h2>
                    {
                        props.user.rental_history.map((item, idx) => {
                            return <div className="rental" key={idx}>
                                        <img src={item.img_url} height="60px" width="auto" alt="item icon" />
                                        <h3>{item.item_name}</h3>
                                        <p>Rental Period: {item.rental_start} - {item.rental_end}</p>
                                    </div>
                        })
                    }
                </div>
                </div>
            </main>
            <footer>
                <span> &#169; Rentit 2021</span>
            </footer>
        </>
    )
}

export default Profile

/*

listings: 

<div className="listings">
    <h2>My Listings</h2>
    <div className="listing">
        <h4>Item</h4>
    </div>
    <div className="listing">
        <h4>Item</h4>
    </div>
</div>

rentals: 

<div className="rental">
    <img src="https://www.pngitem.com/pimgs/m/568-5680053_prod-placeholder-vector-product-icon-png-transparent-png.png" height="60px" width="auto" alt="item icon" />
    <h3>Item Name</h3>
    <p>Rental Period: mm/dd - mm/dd</p>
</div>

*/
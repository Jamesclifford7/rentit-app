import React from 'react'
import Nav from '../navbar/Nav'
import './Profile.css'
import { Link } from 'react-router-dom'

function Profile(props) {
    console.log(props.listedItems)
    return (
        <>
            { 
                props.isLoggedIn
                ? <>
                    <Nav isLoggedIn={props.isLoggedIn} handleLogout={props.handleLogout} />
                    <main>
                        <div className="profile-container">
                            <div className="profile-left">
                                <div className="profile">
                                    <img src="https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png" height="250" width="auto" alt="profile icon" /><br/>
                                    <h1>{props.user.user_name}</h1>
                                    <Link to="/editprofile">Edit Profile</Link>
                                    <h3>{props.user.user_username}</h3>
                                    <h3>{props.user.user_city}</h3>
                                </div>
                                <div className="listings">
                                    <h2>My Listings</h2>
                                    
                                    {
                                        props.listedItems.slice(0).reverse().map((item, idx) => {
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
                                    props.rentalHistory.map((item, idx) => {
                                        return <div className="rental" key={idx}>
                                                    <img src={item.img} height="60px" width="auto" alt="item icon" />
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
                : <h1>Page not found</h1>
            }
        </>
    )
}

export default Profile
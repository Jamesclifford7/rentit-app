import React from 'react'
import Nav from '../navbar/Nav'
import './Profile.css'

function Profile(props) {
    return (
        <>
            <Nav isLoggedIn={props.isLoggedIn} handleLogout={props.handleLogout} />
            <main>
                <div className="profile-container">
                <div className="profile-left">
                    <div className="profile">
                        <img src="https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png" height="250" width="auto" alt="profile icon" /><br/>
                        <h1>Firstname Lastname</h1>
                        <button>Edit Profile</button>
                        <h3>Username</h3>
                        <h3>City</h3>
                    </div>
                    <div className="listings">
                        <h2>My Listings</h2>
                        <div className="listing">
                            <h4>Item</h4>
                        </div>
                        <div className="listing">
                            <h4>Item</h4>
                        </div>
                    </div>
                </div>
                <div className="profile-right">
                    <h2>Rental History</h2>
                    <div className="rental">
                        <img src="https://www.pngitem.com/pimgs/m/568-5680053_prod-placeholder-vector-product-icon-png-transparent-png.png" height="60px" width="auto" alt="item icon" />
                        <h3>Item Name</h3>
                        <p>Rental Period: mm/dd - mm/dd</p>
                    </div>
                    <div className="rental">
                        <img src="https://www.pngitem.com/pimgs/m/568-5680053_prod-placeholder-vector-product-icon-png-transparent-png.png" height="60px" width="auto" alt="item icon" />
                        <h3>Item Name</h3>
                        <p>Rental Period: mm/dd - mm/dd</p>
                    </div>
                    <div className="rental">
                        <img src="https://www.pngitem.com/pimgs/m/568-5680053_prod-placeholder-vector-product-icon-png-transparent-png.png" height="60px" width="auto" alt="item icon" />
                        <h3>Item Name</h3>
                        <p>Rental Period: mm/dd - mm/dd</p>
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

export default Profile
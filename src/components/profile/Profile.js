import React from 'react'
import Nav from '../navbar/Nav'
import './Profile.css'

function Profile() {
    return (
        <>
            <Nav />
            <main>
                <div class="profile-container">
                <div class="profile-left">
                    <div class="profile">
                        <img src="https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png" height="250" width="auto" alt="profile icon" /><br/>
                        <h1>Firstname Lastname</h1>
                        <button>Edit Profile</button>
                        <h3>Username</h3>
                        <h3>City</h3>
                    </div>
                    <div class="listings">
                        <h2>My Listings</h2>
                        <div class="listing">
                            <h4>Item</h4>
                        </div>
                        <div class="listing">
                            <h4>Item</h4>
                        </div>
                    </div>
                </div>
                <div class="profile-right">
                    <h2>Rental History</h2>
                    <div class="rental">
                        <img src="https://www.pngitem.com/pimgs/m/568-5680053_prod-placeholder-vector-product-icon-png-transparent-png.png" height="60px" width="auto" alt="item icon" />
                        <h3>Item Name</h3>
                        <p>Rental Period: mm/dd - mm/dd</p>
                    </div>
                    <div class="rental">
                        <img src="https://www.pngitem.com/pimgs/m/568-5680053_prod-placeholder-vector-product-icon-png-transparent-png.png" height="60px" width="auto" alt="item icon" />
                        <h3>Item Name</h3>
                        <p>Rental Period: mm/dd - mm/dd</p>
                    </div>
                    <div class="rental">
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
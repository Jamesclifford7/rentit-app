import React from 'react'
import Nav from '../navbar/Nav'
import './EditProfile.css'

function EditProfile() {
    return (
        <>
            <Nav />
            <main>
                <div class="edit-profile">
                    <h1>Edit Profile</h1>
                    <img src="https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png" height="100" width="auto" alt="profile icon" /><br/>
                    <button>Upload Image</button>
                    <form>
                        <label for="name">Name:</label>
                        <input id="name" type="text" /><br/>
                        <label for="city">City:</label>
                        <select id="city">
                            <option value="la">Los Angeles</option>
                            <option value="ny">New York</option>
                            <option value="chicago">Chicago</option>
                        </select><br/>
                        <button>Update</button>
                    </form>
                    <div class="listings">
                        <h2>My Listings</h2>
                        <div class="listing">
                            <h4>Item</h4>
                            <button>Delete</button>
                        </div>
                        <div class="listing">
                            <h4>Item</h4>
                            <button>Delete</button>
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

export default EditProfile
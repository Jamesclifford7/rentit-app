import React from 'react'
import Nav from '../navbar/Nav'
import './EditProfile.css'

function EditProfile(props) {
    return (
        <>
            <Nav isLoggedIn={props.isLoggedIn} handleLogout={props.handleLogout} />
            <main>
                <div className="edit-profile">
                    <h1>Edit Profile</h1>
                    <img src="https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png" height="100" width="auto" alt="profile icon" /><br/>
                    <button>Upload Image</button>
                    <form>
                        <label htmlFor="name">Name:</label>
                        <input id="name" type="text" /><br/>
                        <label htmlFor="city">City:</label>
                        <select id="city">
                            <option value="Los Angeles">Los Angeles</option>
                            <option value="New York">New York</option>
                            <option value="Chicago">Chicago</option>
                        </select><br/>
                        <button>Update</button>
                    </form>
                    <div className="listings">
                        <h2>My Listings</h2>
                        {
                            props.user.listed_items.map((item, idx) => {
                                return <div className="listing" key={idx}>
                                            <h4>{item.item_name}</h4>
                                            <button>Delete</button>
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

export default EditProfile

/*

<div className="listing">
    <h4>Item</h4>
    <button>Delete</button>
</div>

*/
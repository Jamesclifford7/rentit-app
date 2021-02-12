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
                    
                    <form onSubmit={event => props.handleEditProfile(event)}>
                        <label htmlFor="name">Name:</label>
                        <input id="name" type="text" /><br/>
                        <label htmlFor="password">Password:</label>
                        <input id="password" type="password" /><br/>
                        <label htmlFor="city">City:</label>
                        <select id="city" defaultValue="">
                            <option  value="" disabled>Select</option>
                            <option value="Los Angeles">Los Angeles</option>
                            <option value="New York">New York</option>
                            <option value="Chicago">Chicago</option>
                        </select><br/>
                        <button type="submit">Update</button>
                    </form>

                    <div className="listings">
                        <h2>My Listings</h2>
                        {
                            props.listedItems.slice(0).reverse().map((item, idx) => {
                                return <div className="listing" key={idx} id={item.id}>
                                            <h4>{item.item_name}</h4>
                                            <button onClick={event => props.handleDeleteItem(event)}>Delete</button>
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
import React from 'react'
import Nav from '../navbar/Nav'
import './CreateProfile.css'

function CreateProfile(props) {
    return (
        <>
            <Nav isLoggedIn={props.isLoggedIn} />
            <main>
            <div className="create-profile">
                <h1>Create Profile</h1>
                <img src="https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png" height="100" width="auto" alt="profile icon" /><br/>
                <button>Upload Image</button>
                { /* <label>include img url</label>
                <input type="text"></input> */ }
                <form>
                    <label htmlFor="name">Name:</label>
                    <input id="name" type="text" /><br/>
                    <label htmlFor="username">Username:</label>
                    <input id="username" type="text" /><br/>
                    <label htmlFor="city">City:</label>
                    <select id="city">
                        <option value="la">Los Angeles</option>
                        <option value="ny">New York</option>
                        <option value="chicago">Chicago</option>
                    </select><br/>
                    <button>Create</button>
                </form>
            </div>
            </main>
            <footer>
                <span> &#169; Rentit 2021</span>
            </footer>
        </>
    )
}

export default CreateProfile
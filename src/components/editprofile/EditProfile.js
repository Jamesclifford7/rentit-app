import React from 'react'
import Nav from '../navbar/Nav'
import './EditProfile.css'

class EditProfile extends React.Component {
    constructor() {
        super(); 
        this.state = {
            showDelete: false,
            id: ""
        }
    }

    renderDelete = (event) => {
        event.preventDefault(); 
        this.setState(prevState => ({
            showDelete: !prevState.showDelete, 
            id: event.target.parentNode.id
        }))
    }

    render() {
        return (
            <>
                {
                    this.props.isLoggedIn
                    ? <>
                        <Nav isLoggedIn={this.props.isLoggedIn} handleLogout={this.props.handleLogout} />
                        <main>
                            <div className="edit-profile">
                                <h1>Edit Profile</h1>
                                <img src="https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png" height="100" width="auto" alt="profile icon" /><br/>             
                                <form onSubmit={event => this.props.handleEditProfile(event)}>
                                    <div className="edit-profile-input">
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
                                        </select>
                                    </div><br/>
                                    <button type="submit">Update</button>
                                </form>

                                <div className="listings">
                                    <h2>My Listings</h2>
                                    {
                                        this.props.listedItems.slice(0).reverse().map((item, idx) => {
                                            return <div className="listing" key={idx} id={item.id}>
                                                        <h4>{item.item_name}</h4>
                                                        <button onClick={event => this.renderDelete(event)}>Delete</button>
                                                        {
                                                            this.state.showDelete && item.id === parseInt(this.state.id)
                                                            ? <div>
                                                                <p>Are you sure?</p>
                                                                <button onClick={event => this.props.handleDeleteItem(event)}>Delete Forever</button>
                                                            </div>
                                                            : null
                                                        }
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
}

export default EditProfile

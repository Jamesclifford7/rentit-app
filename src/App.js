import React from 'react'
import './App.css';
import { Route, withRouter } from 'react-router-dom'
import items from './MockItems'
import users from './MockUsers'
import LandingPage from './components/landing/LandingPage'
import Signup from './components/signup/Signup'
import CreateProfile from './components/createprofile/CreateProfile'
import Search from './components/search/Search'
import SearchResults from './components/searchresults/SearchResults'
import Item from './components/item/Item'
import Checkout from './components/checkout/Checkout'
import Confirmation from './components/confirmation/Confirmation'
import Profile from './components/profile/Profile'
import EditProfile from './components/editprofile/EditProfile'
import Login from './components/login/Login'
import ListItem from './components/listitem/ListItem'

class App extends React.Component {
  constructor() {
    super(); 
    this.state = {
      isLoggedIn: false,
      user: {}, 
      items: items, 
      users: users,
      searchResults: []
    }
  }

  // login handler

  handleLogin = (event) => {
    event.preventDefault(); 
    const  email  = event.target.email.value
    const  password = event.target.password.value

    const users = this.state.users; 

    users.map(user => {
      if (user.email == email && user.password == password) {
        this.setState({
          isLoggedIn: true, 
          user: user
        }); 
        this.props.history.push('/search');
      } else {
        alert('username and password are incorrect')
      }; 
    })

    /*
    if (email === 'johnsmith@gmail.com' || password === 'smithjohn11') {
      this.setState({
        isLoggedIn: true, 
        // items: items
    }); 
      this.props.history.push('/search')
    } else {
      alert('Oops! Username and password are incorrect')
    } */
  }

  // signup handler

  handleSignup = (event) => {
    event.preventDefault(); 
    const email = event.target.email.value; 
    const password = event.target.password.value; 
    const newUser = {
      id: 2,
      name: "", 
      email: email,
      username: "", 
      password: password,
      city: "", 
      profile_img: "",
      rental_history: [], 
      listed_items: []
    }; 
    const updatedUsers = this.state.users; 
    updatedUsers.push(newUser)
    this.setState({
      user: newUser,
      isLoggedIn: true, 
      users: updatedUsers
    }); 
    this.props.history.push('/createprofile'); 
  }

  // create profile handler

  handleCreateProfile = (event) => {
    event.preventDefault(); 
    const name = event.target.name.value; 
    const username = event.target.username.value;
    const city = event.target.city.value; 
    const updatedUser = this.state.user; 
    updatedUser.name = name; 
    updatedUser.username = username; 
    updatedUser.city = city;

    this.setState({
      user: updatedUser
    }); 
    this.props.history.push('/search')

  }

  // logout handler

  handleLogout = (event) => {
    event.preventDefault();
    this.setState({
      isLoggedIn: false, 
      user: {}
    }); 
    this.props.history.push('/')
  }

  // search handler

  handleSearch = (event) => {
    event.preventDefault(); 
    const searchTerm = event.target.search.value
    const category = event.target.category.value
    const city = event.target.city.value
    // console.log(searchTerm, category, city); 
    
    let allItems = this.state.items

    const results = allItems.filter(item => {
      const lowerCaseName = item.item_name.toLowerCase(); 
      const lowerCaseSearchTerm = searchTerm.toLowerCase(); 
      if (lowerCaseName.includes(lowerCaseSearchTerm) && (item.category == category) && (item.city == city)) {
        return item
      }
    })

    // console.log(results)
    this.setState({
      searchResults: results
    }); 
    this.props.history.push('/searchresults'); 
  }

  // checkout handler

  handleCheckout = (event) => {
    event.preventDefault(); 
    const pickupdate = event.target.pickupdate.value
    const returndate = event.target.returndate.value
    const ccnumber = event.target.ccnumber.value
    const expirationdate = event.target.expiration.value
    const securitycode = event.target.securitycode.value
    const itemId = event.target.itemid.value

    const checkoutItem = this.state.searchResults.find(item => {
      return item.id == itemId
    })
    const updatedUser = this.state.user
    checkoutItem['rental_start'] = pickupdate; 
    checkoutItem['rental_end'] = returndate;
    updatedUser.rental_history.unshift(checkoutItem); 
    this.setState({
      user: updatedUser
    }); 
    this.props.history.push(`/confirmation/${itemId}`)
  }

  // list an item handler

  handleListItem = (event) => {
    event.preventDefault(); 
    const itemname = event.target.itemname.value; 
    const category = parseInt(event.target.itemcategory.value); // remember to parseInt()
    const dailycost = parseInt(event.target.dailycost.value); 
    const weeklycost = parseInt(event.target.weeklycost.value);
    const description = event.target.description.value;
    
    const newItem = {
      id: 3,
      item_name: itemname, 
      catgory: category, 
      img_url: "", 
      daily_cost: dailycost, 
      weekly_cost: weeklycost, 
      owner: this.state.user.username, 
      city: this.state.user.city, 
      description: description
    }; 

    const updatedUser = this.state.user; 
    updatedUser.listed_items.unshift(newItem)

    this.setState({
      user: updatedUser
    }); 
    this.props.history.push('/profile')
  }

  // edit profile handler

  handleEditProfile = (event) => {
    event.preventDefault(); 
    const name = event.target.name.value; 
    const password = event.target.password.value;
    const city = event.target.city.value; 
    
    const updatedUser = this.state.user;

    if (!name) {
      updatedUser.name = this.state.user.name
    } else {
      updatedUser.name = name
    }; 

    if (!password) {
      updatedUser.password = this.state.user.password
    } else {
      updatedUser.password = password
    }; 

    if (!city) {
      updatedUser.city = this.state.user.city
    } else {
      updatedUser.city = city
    }; 

    // console.log(name, city, password)

    const updatedUsers = this.state.users; 
    updatedUsers.push(updatedUser)

    this.setState({
      user: updatedUser, 
      users: updatedUsers
    }); 

    this.props.history.push('/profile')

  } 
  
  handleDeleteItem = (event) => {
    event.preventDefault(); 
    const itemId = parseInt(event.target.parentNode.id)
    const currentListedItems = this.state.user.listed_items; 
    

    const itemToDelete = currentListedItems.find(item => {
      if (item.id == itemId) {
        return item
      }
    }); 

    const itemToDeleteIndex = currentListedItems.indexOf(itemToDelete)

    const updatedUser = this.state.user; 

    updatedUser.listed_items.splice(itemToDeleteIndex, 1); 

    this.setState({
      user: updatedUser
    })

    // const updatedListItems = currentListedItems.splice()
  } 

  render() {
    return (
      <div className="App">
        <Route exact path="/"
        render={(props) => (
          <LandingPage {...props} 
          isLoggedIn={this.state.isLoggedIn} />
        )} />
        <Route path="/signup"
        render={(props) => (
          <Signup {...props} 
          isLoggedIn={this.state.isLoggedIn}
          handleSignup={this.handleSignup}/>
        )} />
        <Route path="/createprofile"
        render={(props) => (
          <CreateProfile {...props} 
          isLoggedIn={this.state.isLoggedIn}
          handleCreateProfile={this.handleCreateProfile} />
        )} />
        <Route exact path="/search"
        render={(props) => (
          <Search {...props} 
          isLoggedIn={this.state.isLoggedIn}
          handleLogout={this.handleLogout}
          items={this.state.items} 
          handleSearch={this.handleSearch}/>
        )} />
        <Route exact path="/searchresults"
        render={(props) => (
          <SearchResults {...props} 
          isLoggedIn={this.state.isLoggedIn}
          handleLogout={this.handleLogout}
          items={this.state.items}
          handleSearch={this.handleSearch}
          results={this.state.searchResults} />
        )}/>
        <Route path="/item/:id" // path="/item"
        render={(props) => (
          <Item {...props} 
          isLoggedIn={this.state.isLoggedIn}
          handleLogout={this.handleLogout}
          // items={this.state.items}
          results={this.state.searchResults} />
        )} />
        <Route path="/checkout/:id"
        render={(props) => (
          <Checkout {...props} 
          isLoggedIn={this.state.isLoggedIn}
          handleLogout={this.handleLogout}
          results={this.state.searchResults}
          handleCheckout={this.handleCheckout} />
        )}/>
        <Route path="/confirmation/:id"
        render={(props) => (
          <Confirmation {...props} 
          isLoggedIn={this.state.isLoggedIn}
          handleLogout={this.handleLogout}
          user={this.state.user} />
        )}/>
        <Route path="/profile"
        render={(props) => (
          <Profile {...props} 
          isLoggedIn={this.state.isLoggedIn}
          handleLogout={this.handleLogout}
          user={this.state.user} />
        )} />
        <Route path="/editprofile"
        render={(props) => (
          <EditProfile {...props} 
          isLoggedIn={this.state.isLoggedIn}
          handleLogout={this.handleLogout}
          user={this.state.user}
          handleEditProfile={this.handleEditProfile}
          handleDeleteItem={this.handleDeleteItem} />
        )}/>
        <Route path="/login"
        render={(props) => (
          <Login {...props} 
          isLoggedIn={this.state.isLoggedIn}
          handleLogin={this.handleLogin} />
        )}/>
        <Route path="/listitem"
        render={(props) => (
          <ListItem {...props} 
          isLoggedIn={this.state.isLoggedIn}
          handleLogout={this.handleLogout}
          handleListItem={this.handleListItem} />
        )}/>
      </div>
    )
  }
}

export default withRouter(App);

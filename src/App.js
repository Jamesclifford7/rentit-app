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
      rentalHistory: [], 
      searchResults: [], 
      items: items, 
      users: users,
    }

    // will become: isLoggedIn, user, rentalHistory, listedItems, and searchResults
  }

  // login handler (GET request to retrieve/find the user)

  handleLogin = (event) => {
    event.preventDefault(); 
    const input  = event.target.input.value;
    const password = event.target.password.value;

    // retrieving user 
    fetch('http://localhost:8000/api/login', {
      method: 'GET', 
      headers: {
        'content-type': 'application/json', 
        'input': `${input}`, 
        'password': `${password}`
      }
    })
    .then(res => {
      if (!res.ok) {
        throw new Error()
      }
      return res.json()
    })
    .then(resJson => {
      this.setState({
        isLoggedIn: true,
        user: resJson
      })
    })
    .then(() => {

      // retrieving user's rental history
      const id = this.state.user.id
      fetch(`http://localhost:8000/api/users/${id}/rentalhistory`, {
        method: 'GET', 
        headers: {
          'content-type': 'application/json'
        }
      })
      .then(res => {
        if (!res.ok) {
          throw new Error('rental history GET request error')
        }
        return res.json()
      })
      .then(resJson => {
        this.setState({
          rentalHistory: resJson
        })
      })
      .catch(error => {
        console.log(error)
      }); 
    })
    .then(() => {
      if (this.state.user.user_name && this.state.user.user_username && this.state.user.user_city) {
        this.props.history.push('/search')
      } else {
        this.props.history.push('/createprofile')
      }
    })
    .catch(error => {
      this.setState({
        user: 'not found'
      })
      alert('user not found')
    });

  }

  // signup handler (POST request to add user to database)

  handleSignup = (event) => {
    event.preventDefault(); 
    const email = event.target.email.value; 
    const password = event.target.password.value; 
    const newUser = {
      user_name: "", 
      user_email: email,
      user_password: password,
      user_username: "", 
      user_city: "", 
      profile_img: "",
    }; 

    fetch('http://localhost:8000/api/users', {
      method: 'POST', 
      body: JSON.stringify(newUser), 
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => {
      if (!res.ok) {
        throw new Error()
      }
      return res.json()
    })
    .then(resJson => {
      this.setState({
        isLoggedIn: true,
        user: resJson
      }); 
      this.props.history.push('/createprofile')
    })
  }

  // create profile handler (PATCH request to update existing user in database)

  handleCreateProfile = (event) => {
    event.preventDefault(); 
    const name = event.target.name.value; 
    const username = event.target.username.value;
    const city = event.target.city.value; 
    const id = this.state.user.id;

    const updatedUser = this.state.user; 
    updatedUser.user_name = name; 
    updatedUser.user_username = username; 
    updatedUser.user_city = city;

    console.log(updatedUser);
    fetch(`http://localhost:8000/api/users/${id}`, {
      method: "PATCH", 
      body: JSON.stringify(updatedUser), 
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => {
      if (!res.ok) {
        throw new Error('patch error')
      }
      return res.json()
    })
    .then(resJson => {
      this.setState({
        user: resJson[0]
      })
      this.props.history.push('/search')
    })
    .catch(error => {
      console.log(error)
    })
  }

  // logout handler 

  handleLogout = (event) => {
    event.preventDefault();
    this.setState({
      isLoggedIn: false, 
      user: {}, 
      rentalHistory: [], 
      searchResults: []
    }); 
    this.props.history.push('/')
  }

  // search handler (GET request to retrieve items from databases)

  handleSearch = (event) => {
    event.preventDefault(); 
    const input = event.target.search.value
    // const category = parseInt(event.target.category.value)
    const category = event.target.category.value
    const city = event.target.city.value
    
    fetch('http://localhost:8000/api/search', {
      method: "GET", 
      headers: {
        'content-type': 'application/json', 
        'input': `${input}`, 
        'category': `${category}`, 
        'city': `${city}`
      }
    })
    .then(res => {
      if (!res.ok) {
        throw new Error('search error')
      }
      return res.json()
    }) // need to add additional .then here to find items listed by currently logged in user and remove them from results
    .then(resJson => {
      this.setState({
        searchResults: resJson
      })
      this.props.history.push('/searchresults')
    })
    .catch(error => {
      console.log(error)
    })
  }

  // checkout handler (PATCH request to update user's rental history)

  handleCheckout = (event) => {
    event.preventDefault(); 
    const pickupdate = event.target.pickupdate.value
    const returndate = event.target.returndate.value
    const ccnumber = event.target.ccnumber.value
    const expirationdate = event.target.expiration.value
    const securitycode = event.target.securitycode.value
    const itemId = parseInt(event.target.itemid.value);
    
    const checkoutItem = this.state.searchResults.find(item => {
      return item.id === itemId
    }); 
    console.log(this.state.searchResults, checkoutItem, itemId)
    const updatedUser = this.state.user
    checkoutItem['rental_start'] = pickupdate; 
    checkoutItem['rental_end'] = returndate;
    
    if (ccnumber === '4012888888881881' && expirationdate === '08/30' && securitycode === '342') {
      updatedUser.rental_history.unshift(checkoutItem); 
      this.setState({
        user: updatedUser
      }); 
      this.props.history.push(`/confirmation/${itemId}`)
    } else {
      alert('please enter credit card information')
    } 
  }

  // list an item handler (PATCH request to update user's listed items)

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

  // edit profile handler (PATCH request to update user info)

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

  // delete item handler (PATCH request to update user's listed items)
  
  handleDeleteItem = (event) => {
    event.preventDefault(); 
    const itemId = parseInt(event.target.parentNode.id)
    const currentListedItems = this.state.user.listed_items; 
    
    const itemToDelete = currentListedItems.find(item => {
      if (item.id === itemId) {
        return item
      } else {
        return null
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
    console.log(this.state.user)
    console.log(this.state.rentalHistory)
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
          user={this.state.user}
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
          user={this.state.user}
          rentalHistory={this.state.rentalHistory} />
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

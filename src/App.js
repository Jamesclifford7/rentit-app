import React from 'react'
import './App.css';
import { Route, withRouter } from 'react-router-dom'
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
      listedItems: [],  
      searchResults: [], 
      searchValues: [], 
      signupMessage: ''
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

      // retrieving user's currently listed items

      const id = this.state.user.id
      fetch(`http://localhost:8000/api/items/${id}/listeditems`, {
        method: 'GET', 
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
          listedItems: resJson
        })
      })
      .catch(error => {
        console.log(error)
      })
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

    let hasError = false; 
    fetch('http://localhost:8000/api/users', {
      method: 'POST', 
      body: JSON.stringify(newUser), 
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => {
      if (!res.ok) {
        // throw new Error()
        hasError = true
        return res.text()
      }
      return res.json()
    })
    .then(data => {
      if (hasError) {
        throw new Error(data)
      }
      this.setState({
        isLoggedIn: true,
        user: data
      }); 
      this.props.history.push('/createprofile')
    })
    .catch(error => {
      error  = `${error}`.split(" ").splice(1, 7).join(" "); 
      this.setState({
        signupMessage: `Oops! ${error}`
      })
    })
    /*
    .then(resJson => {
      this.setState({
        isLoggedIn: true,
        user: resJson
      }); 
      this.props.history.push('/createprofile')
    }) */
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
    const category = event.target.category.value
    const city = event.target.city.value
    const id = this.state.user.id
    
    fetch('http://localhost:8000/api/search', {
      method: "GET", 
      headers: {
        'content-type': 'application/json', 
        'input': `${input}`, 
        'category': `${category}`, 
        'city': `${city}`, 
        'id': `${id}`
      }
    })
    .then(res => {
      if (!res.ok) {
        // throw new Error('search error')
        this.setState({
          searchResults: [], 
          searchValues: [category, city]
        });
        this.props.history.push('/searchresults')
      }
      return res.json()
    }) 
    .then(resJson => {
      this.setState({
        searchResults: resJson, 
        searchValues: [category, city]
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
    const ccnumber = event.target.ccnumber.value;
    const expirationdate = event.target.expiration.value;
    const securitycode = event.target.securitycode.value;
    const itemId = parseInt(event.target.itemid.value);

    const item_name = event.target.itemname.value; 
    const category = parseInt(event.target.category.value); 
    // const img = event.target.img.value; 
    const daily_cost = parseInt(event.target.dailycost.value); 
    const weekly_cost = parseInt(event.target.weeklycost.value); 
    const owner_username = event.target.ownerusername.value; 
    const owner_id = parseInt(event.target.ownerid.value); 
    const city = event.target.city.value;
    const item_description = event.target.itemdescription.value; 
    const rental_start = event.target.pickupdate.value; 
    const rental_end = event.target.returndate.value; 
    const rented_by_id = parseInt(event.target.rentedbyid.value); 
    const total_cost = parseInt(event.target.totalcost.value) 

    const newItem = {
      item_name, 
      category, 
      img: 'https://www.pngitem.com/pimgs/m/568-5680053_prod-placeholder-vector-product-icon-png-transparent-png.png', 
      daily_cost, 
      weekly_cost, 
      owner_username, 
      owner_id, 
      city, 
      item_description, 
      rental_start, 
      rental_end, 
      rented_by_id, 
      total_cost
    }; 


    // DELETE from items, then POST to rental_history
    
    if (ccnumber === '4012888888881881' && expirationdate === '08/30' && securitycode === '342') {
      
      fetch(`http://localhost:8000/api/items/${itemId}`, {
        method: "DELETE", 
        headers: {
          'content-type': 'application/json'
        }
      })
      .then(res => {
        if (!res.ok) {
          throw new Error()
        }
      })
      .catch(error => {
        console.log(error)
      }); 

      fetch(`http://localhost:8000/api/users/${rented_by_id}/rentalhistory`, {
        method: "POST", 
        body: JSON.stringify(newItem),
        headers: {
          'content-type': 'application/json'
        }
      })
      .then(res => {
        if (!res.ok) {
          throw new Error('POST error to rental history')
        }
        return res.json()
      })
      .then(resJson => {
        this.setState({
          rentalHistory: [...this.state.rentalHistory, resJson]
        }); 
        this.props.history.push(`/confirmation/${resJson.id}`)
      })
      .catch(error => {
        console.log(error)
      }) 

    } else {
      alert('please enter credit card information')
    }  

  }

  // list an item handler (POST request to update user's listed items)

  handleListItem = (event) => {
    event.preventDefault(); 
    const item_name = event.target.itemname.value; 
    const category = parseInt(event.target.itemcategory.value); 
    const daily_cost = parseInt(event.target.dailycost.value); 
    const weekly_cost = parseInt(event.target.weeklycost.value);
    const description = event.target.description.value;
    const username = this.state.user.user_username; 
    const owner_id = this.state.user.id; 
    const city = this.state.user.user_city; 

    const newItem = {
      item_name: item_name, 
      category: category, 
      img: "https://www.pngitem.com/pimgs/m/568-5680053_prod-placeholder-vector-product-icon-png-transparent-png.png", 
      daily_cost: daily_cost, 
      weekly_cost: weekly_cost, 
      owner_username: username, 
      owner_id: owner_id, 
      city: city, 
      item_description: description, 
      rental_start: null, 
      rental_end: null, 
      rented_by_id: null
    }; 

    fetch('http://localhost:8000/api/items/', {
      method: "POST", 
      body: JSON.stringify(newItem),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => {
      if (!res.ok) {
        throw new Error('POST error with /api/items')
      }
      return res.json()
    })
    .then(resJson => {
      this.setState({
        listedItems: [...this.state.listedItems, resJson]
      }); 
      this.props.history.push('/profile') 
    })
    .catch(error => {
      console.log(error)
    })
  }

  // edit profile handler (PATCH request to update user info)
  
  handleEditProfile = (event) => {
    event.preventDefault(); 
    const name = event.target.name.value; 
    const password = event.target.password.value;
    const city = event.target.city.value; 
    
    const updatedUser = this.state.user;
    const id = this.state.user.id

    if (!name) {
      updatedUser.user_name = this.state.user.user_name
    } else {
      updatedUser.user_name = name
    }; 

    if (!password) {
      updatedUser.user_password = this.state.user.user_password
    } else {
      updatedUser.user_password = password
    }; 

    if (!city) {
      updatedUser.user_city = this.state.user.user_city
    } else {
      updatedUser.user_city = city
    }; 

    
    fetch(`http://localhost:8000/api/users/${id}`, {
      method: "PATCH", 
      body: JSON.stringify(updatedUser),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => {
      if (!res.ok) {
        throw new Error('error with PATCH request to /api/users/:id')
      }
      return res.json()
    })
    .then(resJson => {
      this.setState({
        user: resJson[0],
      }); 
      this.props.history.push('/profile')
    })
    .catch(error => {
      return console.log(error)
    }); 

  };  

  // delete item handler (DELETE request /api/items to update user's listed items)
  
  handleDeleteItem = (event) => {
    event.preventDefault(); 
    const itemId = parseInt(event.target.parentNode.id)

    // removing the user's listed items
    
    fetch(`http://localhost:8000/api/items/${itemId}`, {
      method: "DELETE", 
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => {
      if (!res.ok) {
        throw new Error('DELETE error with /api/items/:id')
      }
    })
    .then(() => {
      // updating this.state.listedItems
      
      const id = this.state.user.id
      fetch(`http://localhost:8000/api/items/${id}/listeditems`, {
        method: "GET", 
        headers: {
          'content-type': 'application/json'
        }
      })
      .then(res => {
        if (!res.ok) {
          throw new Error('GET request error with retrieving users updated listed items')
        }
        return res.json()
      })
      .then(resJson => {
        this.setState({
          listedItems: resJson
        })
      })
      .catch(error => {
        console.log(error)
      }) 
    })
    .catch(error => {
      console.log(error)
    }) 
  
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
          handleSignup={this.handleSignup}
          signupMessage={this.state.signupMessage}/>
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
          handleSearch={this.handleSearch} />
        )} />
        <Route exact path="/searchresults"
        render={(props) => (
          <SearchResults {...props} 
          isLoggedIn={this.state.isLoggedIn}
          handleLogout={this.handleLogout}
          handleSearch={this.handleSearch}
          results={this.state.searchResults}
          searchValues={this.state.searchValues} />
        )}/>
        <Route path="/item/:id" 
        render={(props) => (
          <Item {...props} 
          isLoggedIn={this.state.isLoggedIn}
          handleLogout={this.handleLogout}
          results={this.state.searchResults} />
        )} />
        <Route path="/checkout/:id"
        render={(props) => (
          <Checkout {...props} 
          isLoggedIn={this.state.isLoggedIn}
          user={this.state.user}
          handleLogout={this.handleLogout}
          results={this.state.searchResults}
          handleCheckout={this.handleCheckout} />
        )}/>
        <Route path="/confirmation/:id"
        render={(props) => (
          <Confirmation {...props} 
          isLoggedIn={this.state.isLoggedIn}
          rentalHistory={this.state.rentalHistory}
          handleLogout={this.handleLogout}
          user={this.state.user} />
        )}/>
        <Route path="/profile"
        render={(props) => (
          <Profile {...props} 
          isLoggedIn={this.state.isLoggedIn}
          handleLogout={this.handleLogout}
          user={this.state.user}
          listedItems={this.state.listedItems}
          rentalHistory={this.state.rentalHistory} />
        )} />
        <Route path="/editprofile"
        render={(props) => (
          <EditProfile {...props} 
          isLoggedIn={this.state.isLoggedIn}
          handleLogout={this.handleLogout}
          user={this.state.user}
          listedItems={this.state.listedItems}
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
          handleListItem={this.handleListItem}
          user={this.state.user} />
        )}/>
      </div>
    )
  }
}

export default withRouter(App);

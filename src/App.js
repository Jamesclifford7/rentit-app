import React from 'react'
import './App.css';
import { Route, withRouter } from 'react-router-dom'
import items from './STORE'
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
      user: {
        id: 1,
        name: "John Smith", 
        email: "johnsmith@gmail.com",
        username: "johnsmith1", 
        password: "smithjohn11",
        city: "Los Angeles", 
        profile_img: "",
        rental_history: [
            {
                item_name: "Saw", 
                category: 2, 
                rental_period: "4/10 - 4/15"
            }, 
            {
                item_name: "2 30lb Dumbbells", 
                category: 3, 
                rental_period: "2/6 - 1/9"
            }, 
            {
                item_name: "Fixed Gear Bike", 
                category: 4, 
                rental_period: "1/1 - 1/5"
            }
        ], 
        listed_items: [
            {
                id: 1,
                item_name: "Stand Up Paddle Board", 
                catgory: 4, 
                img_url: "https://cdn.shopify.com/s/files/1/0103/0448/7482/products/isupskiff20u-499___iskiff-106-inflatable-stand-up-paddle-board-isup-with-bag-paddle-pump__front.jpg?v=1576859442", 
                daily_cost: 30, 
                weekly_cost: 150
            }, 
            {
                id: 2,
                item_name: "Canon DSLR Camera", 
                catgory: 5, 
                img_url: "https://cdn.mos.cms.futurecdn.net/3khZK3kS9UJHD3cZCAxwn8.jpg", 
                daily_cost: 20, 
                weekly_cost: 100
            }
        ]
      }, 
      items: items, 
      searchResults: []
    }
  }

  handleLogin = (event) => {
    event.preventDefault(); 
    const  email  = event.target.email.value
    const  password = event.target.password.value
    // console.log(email, password)
    if (email === 'johnsmith@gmail.com' || password === 'smithjohn11') {
      this.setState({
        isLoggedIn: true, 
        // items: items
      }); 
      this.props.history.push('/search')
    } else {
      alert('Oops! Username and password are incorrect')
    }
  }

  handleLogout = (event) => {
    event.preventDefault();
    this.setState({
      isLoggedIn: false
    }); 
    this.props.history.push('/')
  }

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
      if (lowerCaseName.includes(lowerCaseSearchTerm) && item.catgory == category && item.city == city) {
        return item
      }
    })

    // console.log(results)
    this.setState({
      searchResults: results
    }); 
    this.props.history.push('/searchresults'); 
  }

  render() {
    console.log(this.state.searchResults)
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
          isLoggedIn={this.state.isLoggedIn}/>
        )} />
        <Route path="/createprofile"
        render={(props) => (
          <CreateProfile {...props} 
          isLoggedIn={this.state.isLoggedIn} />
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
        <Route path="/item" // path="/item/:id"
        render={(props) => (
          <Item {...props} 
          isLoggedIn={this.state.isLoggedIn}
          handleLogout={this.handleLogout}
          items={this.state.items} />
        )} />
        <Route path="/checkout"
        render={(props) => (
          <Checkout {...props} 
          isLoggedIn={this.state.isLoggedIn}
          handleLogout={this.handleLogout} />
        )}/>
        <Route path="/confirmation"
        render={(props) => (
          <Confirmation {...props} 
          isLoggedIn={this.state.isLoggedIn}
          handleLogout={this.handleLogout} />
        )}/>
        <Route path="/profile"
        render={(props) => (
          <Profile {...props} 
          isLoggedIn={this.state.isLoggedIn}
          handleLogout={this.handleLogout} />
        )} />
        <Route path="/editprofile"
        render={(props) => (
          <EditProfile {...props} 
          isLoggedIn={this.state.isLoggedIn}
          handleLogout={this.handleLogout} />
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
          handleLogout={this.handleLogout} />
        )}/>
      </div>
    )
  }
}

export default withRouter(App);

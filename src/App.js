import React from 'react'
import './App.css';
import { Route } from 'react-router-dom'
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
      user: {}
    }
  }


  render() {
    return (
      <div className="App">
        <Route exact path="/"
        component={LandingPage} />
        <Route path="/signup"
        component={Signup} />
        <Route path="/createprofile"
        component={CreateProfile} />
        <Route exact path="/search"
        component={Search} />
        <Route exact path="/searchresults"
        component={SearchResults}/>
        <Route path="/item"
        component={Item} />
        <Route path="/checkout"
        component={Checkout}/>
        <Route path="/confirmation"
        component={Confirmation}/>
        <Route path="/profile"
        component={Profile} />
        <Route path="/editprofile"
        component={EditProfile}/>
        <Route path="/login"
        component={Login}/>
        <Route path="/listitem"
        component={ListItem}/>
      </div>
    )
  }
}

export default App;

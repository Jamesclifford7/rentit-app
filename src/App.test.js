// import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; 
import ReactDOM from 'react-dom'; 
import App from './App';
import Checkout from './components/checkout/Checkout'; 
import Confirmation from './components/confirmation/Confirmation';
import CreateProfile from './components/createprofile/CreateProfile';
import EditProfile from './components/editprofile/EditProfile'; 
import Item from './components/item/Item'; 
import LandingPage from './components/landing/LandingPage'; 
import ListItem from './components/listitem/ListItem'; 
import Login from './components/login/Login'; 
import Nav from './components/navbar/Nav';
import Profile from './components/navbar/Nav'; 
import Search from './components/search/Search'; 
import SearchResults from './components/searchresults/SearchResults'; 
import Signup from './components/signup/Signup'; 

it('App renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, div)

  ReactDOM.unmountComponentAtNode(div)
}); 

it('Checkout renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(<BrowserRouter><Checkout /></BrowserRouter>, div)

  ReactDOM.unmountComponentAtNode(div)
}); 

it('Confirmation renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(<BrowserRouter><Confirmation /></BrowserRouter>, div)

  ReactDOM.unmountComponentAtNode(div)
}); 

it('CreateProfile renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(<BrowserRouter><CreateProfile /></BrowserRouter>, div)

  ReactDOM.unmountComponentAtNode(div)
}); 

it('EditProfile renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(<BrowserRouter><EditProfile /></BrowserRouter>, div)

  ReactDOM.unmountComponentAtNode(div)
}); 

it('Item renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(<BrowserRouter><Item /></BrowserRouter>, div)

  ReactDOM.unmountComponentAtNode(div)
}); 

it('LandingPage renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(<BrowserRouter><LandingPage /></BrowserRouter>, div)

  ReactDOM.unmountComponentAtNode(div)
}); 

it('ListItem renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(<BrowserRouter><ListItem /></BrowserRouter>, div)

  ReactDOM.unmountComponentAtNode(div)
}); 

it('Login renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(<BrowserRouter><Login /></BrowserRouter>, div)

  ReactDOM.unmountComponentAtNode(div)
}); 

it('Nav renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(<BrowserRouter><Nav /></BrowserRouter>, div)

  ReactDOM.unmountComponentAtNode(div)
}); 

it('Profile renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(<BrowserRouter><Profile /></BrowserRouter>, div)

  ReactDOM.unmountComponentAtNode(div)
}); 

it('Search renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(<BrowserRouter><Search /></BrowserRouter>, div)

  ReactDOM.unmountComponentAtNode(div)
}); 

it('SearchResults renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(<BrowserRouter><SearchResults /></BrowserRouter>, div)

  ReactDOM.unmountComponentAtNode(div)
}); 

it('Signup renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(<BrowserRouter><Signup /></BrowserRouter>, div)

  ReactDOM.unmountComponentAtNode(div)
}); 

/*
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/

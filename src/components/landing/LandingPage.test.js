import { BrowserRouter } from 'react-router-dom'; 
import ReactDOM from 'react-dom'; 
import LandingPage from './LandingPage'; 

it('LandingPage renders without crashing', () => {
    const div = document.createElement('div')
  
    ReactDOM.render(<BrowserRouter><LandingPage /></BrowserRouter>, div)
  
    ReactDOM.unmountComponentAtNode(div)
}); 
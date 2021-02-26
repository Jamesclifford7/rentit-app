import { BrowserRouter } from 'react-router-dom'; 
import ReactDOM from 'react-dom';
import Signup from './Signup'; 

it('Signup renders without crashing', () => {
    const div = document.createElement('div')
  
    ReactDOM.render(<BrowserRouter><Signup /></BrowserRouter>, div)
  
    ReactDOM.unmountComponentAtNode(div)
});
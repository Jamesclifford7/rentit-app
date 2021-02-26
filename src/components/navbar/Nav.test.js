import { BrowserRouter } from 'react-router-dom'; 
import ReactDOM from 'react-dom'; 
import Nav from './Nav';

it('Nav renders without crashing', () => {
    const div = document.createElement('div')
  
    ReactDOM.render(<BrowserRouter><Nav /></BrowserRouter>, div)
  
    ReactDOM.unmountComponentAtNode(div)
}); 
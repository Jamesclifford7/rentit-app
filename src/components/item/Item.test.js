import { BrowserRouter } from 'react-router-dom'; 
import ReactDOM from 'react-dom'; 
import Item from './Item'; 

it('Item renders without crashing', () => {
    const div = document.createElement('div')
  
    ReactDOM.render(<BrowserRouter><Item /></BrowserRouter>, div)
  
    ReactDOM.unmountComponentAtNode(div)
});
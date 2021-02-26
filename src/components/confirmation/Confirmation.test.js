import { BrowserRouter } from 'react-router-dom'; 
import ReactDOM from 'react-dom'; 
import Confirmation from './Confirmation'; 

it('Confirmation renders without crashing', () => {
    const div = document.createElement('div')
  
    ReactDOM.render(<BrowserRouter><Confirmation /></BrowserRouter>, div)
  
    ReactDOM.unmountComponentAtNode(div)
}); 
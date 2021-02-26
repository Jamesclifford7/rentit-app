import { BrowserRouter } from 'react-router-dom'; 
import ReactDOM from 'react-dom'; 
import Checkout from './Checkout'

it('Checkout renders without crashing', () => {
    const div = document.createElement('div')
  
    ReactDOM.render(<BrowserRouter><Checkout /></BrowserRouter>, div)
  
    ReactDOM.unmountComponentAtNode(div)
  }); 
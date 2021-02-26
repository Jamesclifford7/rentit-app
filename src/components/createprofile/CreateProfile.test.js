import { BrowserRouter } from 'react-router-dom'; 
import ReactDOM from 'react-dom'; 
import CreateProfile from './CreateProfile'; 

it('CreateProfile renders without crashing', () => {
    const div = document.createElement('div')
  
    ReactDOM.render(<BrowserRouter><CreateProfile /></BrowserRouter>, div)
  
    ReactDOM.unmountComponentAtNode(div)
}); 
import { BrowserRouter } from 'react-router-dom'; 
import ReactDOM from 'react-dom'; 
import EditProfile from './EditProfile'; 

it('EditProfile renders without crashing', () => {
    const div = document.createElement('div')
  
    ReactDOM.render(<BrowserRouter><EditProfile /></BrowserRouter>, div)
  
    ReactDOM.unmountComponentAtNode(div)
});
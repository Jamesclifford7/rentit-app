import { BrowserRouter } from 'react-router-dom'; 
import ReactDOM from 'react-dom';
import Profile from './Profile';

it('Profile renders without crashing', () => {
    const div = document.createElement('div')
  
    ReactDOM.render(<BrowserRouter><Profile /></BrowserRouter>, div)
  
    ReactDOM.unmountComponentAtNode(div)
}); 
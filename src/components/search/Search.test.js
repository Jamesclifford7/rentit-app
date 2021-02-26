import { BrowserRouter } from 'react-router-dom'; 
import ReactDOM from 'react-dom';
import Search from './Search';

it('Search renders without crashing', () => {
    const div = document.createElement('div')
  
    ReactDOM.render(<BrowserRouter><Search /></BrowserRouter>, div)
  
    ReactDOM.unmountComponentAtNode(div)
}); 
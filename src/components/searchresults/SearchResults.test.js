import { BrowserRouter } from 'react-router-dom'; 
import ReactDOM from 'react-dom';
import SearchResults from './SearchResults'; 

it('SearchResults renders without crashing', () => {
    const div = document.createElement('div')
  
    ReactDOM.render(<BrowserRouter><SearchResults /></BrowserRouter>, div)
  
    ReactDOM.unmountComponentAtNode(div)
}); 
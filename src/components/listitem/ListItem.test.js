import { BrowserRouter } from 'react-router-dom'; 
import ReactDOM from 'react-dom';
import ListItem from './ListItem';

it('ListItem renders without crashing', () => {
    const div = document.createElement('div')
  
    ReactDOM.render(<BrowserRouter><ListItem /></BrowserRouter>, div)
  
    ReactDOM.unmountComponentAtNode(div)
}); 
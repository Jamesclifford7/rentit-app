import { BrowserRouter } from 'react-router-dom'; 
import ReactDOM from 'react-dom'; 
import App from './App';

it('App renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, div)

  ReactDOM.unmountComponentAtNode(div)
}); 


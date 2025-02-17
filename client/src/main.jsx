
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import "./Css/Style.css"
import 'bootstrap/dist/css/bootstrap.min.css';

import store from './Redux/store.jsx';
import { Provider } from 'react-redux';
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
<App />
  </Provider>
    
 
)

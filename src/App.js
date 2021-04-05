import './styles/styles.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import routes from './config/routes';
import {Provider} from 'react-redux';
import store from './store';
import { useEffect } from 'react';
import { loadUser } from './actions/authActions';

function App() {
  useEffect(()=>{
    store.dispatch(loadUser())
  },[])

  return (
    <Router>
      <Provider store = {store}>
        <div className = "sites-background"/>
          <div className= "site">
            <Navbar/>
            {routes}
          </div>
      </Provider>
    </Router>
  );
}

export default App;

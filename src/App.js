import './App.css';
import Main from './Container/main'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import configureStore from './store';
import {Provider} from 'react-redux';
import 'antd/dist/antd.css';

import Signup from './Container/signup';
import Signin from './Container/signin';
import setAuthToken from './utils/setAuthtoken';
import jwt_decode from 'jwt-decode';
import * as types from './actions/types';
import Dashboard from './Container/dashboard';
import Profile from './Container/profile'
import Mainpage from './Container/mainpage'
import About from './Container/about'
import Search from './Container/search'
import Restarans from './Container/restarans'
import Restmore from './Container/restmore'
import Orders from './Container/orders'
import Favorites from './Container/favorites'

const store = configureStore()

if (localStorage.token) {
  setAuthToken(localStorage.token);
  const decoded = jwt_decode(localStorage.token);
  store.dispatch({type: types.SET_CERRENT_USER, payload: decoded});
  const currentTime = Date.now()/1000;
  if (decoded.exp < currentTime) {
    localStorage.removeItem('token');
    setAuthToken(false);
    store.dispatch({type: types.SET_CERRENT_USER, payload: {}});
    window.location.href = '/';
  }
}

function App() {
  return (
    <div className="App">
      <Provider store={store}>   
        <Router>
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/signin" component={Signin}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/mainpage" component={Mainpage}/>
            <Route path="/about" component={About}/>
            <Route exact path="/search" component={Search} />
            <Route path="/restarans" component={Restarans}/>
            <Route path="/restmore" component={Restmore}/>
            <Route path="/orders" component={Orders}/>
            <Route path="/favorites" component={Favorites}/>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
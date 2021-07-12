import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Register } from './user/Register';
import { Login } from './user/Login';
import {Contact} from './contact/Contact'
 import './App.css';

function App() {
  return (
    <div className="App">
      
      <Router>
     <Switch>
     <Route path='/login' component={Login}></Route>
     
     <Route path='/register' component={Register}></Route>
     <Route path='/' component={Contact}></Route>
     </Switch>

  
    </Router>
    
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from './pages/home'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <Route exact path="/" component={Home}/>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

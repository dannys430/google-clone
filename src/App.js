import React from 'react';
import './App.scss';
import Home from './pages/Home'
import SearchPage from './pages/SearchPage'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import ThemeContextProvider from './context/ThemeContext';

function App() {
  
  return (
    <ThemeContextProvider>
      <div className="app">
        <Router>
          <Switch>
            <Route path="/search">
              <SearchPage />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeContextProvider>
  );
}

export default App;

import React from 'react';
import './App.scss';
import Header from './Header/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Products from './Products/Products';
import Help from './Help/Help';

function App() {
  return (
    <Router>
    <Header />
    <main>
    <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about/" component={About}/>
        <Route path="/products/" component={Products}/>
        <Route path="/help/" component={Help} />
    </Switch>
    </main>
</Router>
  );
}

export default App;

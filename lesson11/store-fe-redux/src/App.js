import React from 'react';
import Navigation from './component/Navigation/Navigation';
import { Switch, Route } from 'react-router-dom';
import Home from './containers/Home/Home';
import Store from './containers/Store/Store';
import FullProduct from './containers/FullProduct/FullProduct';
import MyCart from './containers/MyCart/MyCart';

function App() {
  return (
    <div >
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/store" component={Store} />
        <Route path="/store/:id" component={FullProduct} />
        <Route path="/my-cart" component={MyCart} />
      </Switch>
    </div>
  );
}

export default App;

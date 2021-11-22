import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import Productdetails from './pages/Shop/Productdetails';
import Register from './pages/Account/Register';
import Login from './pages/Account/Login';
import ShoppingCart from './pages/Cart/ShoppingCart';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Wishlist from './pages/Cart/Wishlist';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
           <Route exact path="/" component={Home}>
              <Home/>
            </Route> 
            <Route path="/ProductDetails">
              <Productdetails/>
          </Route> 
          <Route path="/ShoppingCart">
              <ShoppingCart/>
          </Route> 
          <Route path="/Login">
              <Login/>
          </Route> 
          <Route path="/Register">
              <Register/>
          </Route> 
          <Route path="/Shop">
              <Shop/>
          </Route> 
          <Route path="/MyWishlist">
              <Wishlist/>
          </Route> 
        </Switch>
      </Router>
        
      
    </div>
  );
}

export default App;

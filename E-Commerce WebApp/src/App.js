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
import Profile from './pages/Account/Profile';
import AddProduct from './pages/Products/AddProduct';
import EditProduct from './pages/Products/EditProduct';
import Dashboard from './pages/Admin/Dashboard';
import AddImageSlide from './pages/Admin/ImageSlider/AddImageSlide';
import EditImageSlide from './pages/Admin/ImageSlider/EditImageSlide';
import SlideList from './pages/Admin/ImageSlider/SlideList';

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
          <Route path="/MyProfile">
              <Profile/>
          </Route> 
          <Route path="/Product/AddProduct">
              <AddProduct/>
          </Route> 
          <Route path="/Product/EditProduct">
              <EditProduct/>
          </Route>
          <Route path="/Admin/Dashboard">
              <Dashboard/>
          </Route>
          <Route path="/Admin/AddSlide">
              <AddImageSlide/>
          </Route>
          <Route path="/Admin/EditSlide">
              <EditImageSlide/>
          </Route>
          <Route path="/Admin/SlideList">
              <SlideList/>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;

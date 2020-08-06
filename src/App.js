import './App.css';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import React from 'react';
import BrandIcons from './components/BrandIcons'
import 'bootstrap/dist/css/bootstrap.min.css';
import Trending from './components/Trending';
import Products from './components/Products';



import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


const App = () => {



    return (
      <div>
        <div>
          <NavBar/>
        </div>
        <div class='background'>
          <div class='search-title'>
              <div class= 'title'>
                The Sneaks App
              </div>
              <div class= 'subtitle'>
                Search Sneakers and Compare Prices
              </div>
          </div>
          <SearchBar />
          <BrandIcons/>
        </div>
        <Switch>
          <Route exact path='/' component={Trending}/>
          <Route path='/search/:key' component={Products}/>
        </Switch>
      </div>
    );
}


export default App;

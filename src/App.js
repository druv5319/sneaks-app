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
  console.log(process.env.PUBLIC_URL);
  console.log("wwwowow")



    return (
      <div>
        <div>
          <NavBar/>
        </div>
        <div class='background'>
          <div class='search-title'>
              <div class= 'title'>
                The Sneaks AppAA
              </div>
              <div class= 'subtitle'>
                Search Sneakers and Compare Prices
              </div>
          </div>
          <SearchBar />
          <BrandIcons/>
        </div>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL+'/'} component={Trending}/>
          <Route path={process.env.PUBLIC_URL +'/search/:key'} component={Products}/>
        </Switch>
      </div>
    );
}


export default App;

import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Map from "./components/Map";
import Error from "./components/Error";
import Blog from "./components/Blog"
import Header from "./components/Header";

require ("react-bootstrap/lib/NavbarHeader");

class App extends Component {
  render() {
    return (

        <BrowserRouter>
            <div>
<Header/>
                <Switch>
                    <Route  path="/" component={Home} exact  />
                    <Route path="/map" component={Map}/>
                    <Route path="/blog" component={Blog}/>
                    <Route component={Error} />
                </Switch>

            </div>
        </BrowserRouter>



);
  }
}


export default App;

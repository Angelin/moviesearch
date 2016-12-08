import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx';
import Home from './components/Home.jsx';
import SearchMovies from './components/SearchMovies.jsx';
import ContactUs from './components/ContactUs.jsx';
import NotFound from './components/NotFound.jsx';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';


var destination = document.querySelector("#root");

ReactDOM.render(
	<div>
  	<Router history={hashHistory}>
	    <Route path="/" component={App}>
		    <IndexRoute component={Home} />
		    <Route path="search" component={SearchMovies} />
		    <Route path="contact" component={ContactUs} />
		    <Route path='*' component={NotFound} />
	    </Route>
    </Router>
    </div>
, destination);
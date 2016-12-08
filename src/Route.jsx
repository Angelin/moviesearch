import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx';
import Home from './components/Home.jsx';
import SearchMovies from './components/SearchMovies.jsx';
import CardExampleWithAvatar from './components/MovieDetail.jsx';
import ContactUs from './components/ContactUs.jsx';
import NotFound from './components/NotFound.jsx';
import PaperExampleSimple from './components/papercomponent.jsx';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

var destination = document.querySelector("#root");

ReactDOM.render(
  	<Router history={hashHistory}>
	    <Route path="/" component={App}>
		    <IndexRoute component={Home} />
		    <Route path="search" component={SearchMovies} />
		    <Route path="detail" component={CardExampleWithAvatar} />
		    <Route path="contact" component={ContactUs} />
		    <Route path='*' component={NotFound} />
	    </Route>
    </Router>
, destination);
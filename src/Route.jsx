import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {blue400, blue700} from 'material-ui/styles/colors';

import App from './components/App.jsx';
import Home from './components/Home.jsx';
import SearchMovies from './components/SearchMovies.jsx';
import MovieDetail from './components/MovieDetail.jsx';
import ContactUs from './components/ContactUs.jsx';
import NotFound from './components/NotFound.jsx';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    textColor: blue700,
    primary1Color: blue400,
    primary2Color: blue700
  }
});

ReactDOM.render(
	<MuiThemeProvider muiTheme={muiTheme}>
	  	<Router history={hashHistory}>
		    <Route path="/" component={App}>
			    <IndexRoute component={Home} />
			    <Route path="search" component={SearchMovies} />
			    <Route path="/movie/:movieId" component={MovieDetail} />
			    <Route path="contact" component={ContactUs} />
			    <Route path='*' component={NotFound} />
		    </Route>
	    </Router>
    </MuiThemeProvider>
, document.querySelector("#root"));

import React from 'react';
import Request from 'superagent';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MovieList from './MovieList.jsx';

class SearchMovies extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = { 
    		/* initial state */ 
    		search: '',
            check: false,
            movies: []
    	};
        this.saveSearch = this.saveSearch.bind(this);
    	this.showMovies = this.showMovies.bind(this);
  	}
    getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme)};
    }
    saveSearch() {
        this.setState({search: this.refs.movieTitle.input.value});
    }
  	showMovies() {
        let th = this;
        this.setState({check: true});
        Request.get('http://www.omdbapi.com/')
        .query({s: this.state.search})
        .end(function (err, res) {
            var moviesList = res.body;
            th.setState({movies: moviesList.Search});
        });
  	}
    render() {
        var temp = '';
        if(this.state.check && this.state.movies.length>0)
            temp = <MovieList data={this.state.movies}/>;
        else if(this.state.check && this.state.movies.length == 0)
            temp = <h3>Oops! No Movies...</h3>
        const divStyle = {
            textAlign: 'center'
        }
        const buttonStyle = {
            margin: 10
        }
        return (
            <div style={divStyle}>
                <TextField
                    hintText="Search your movie here..."
                    floatingLabelText="Search Movies"
                    ref="movieTitle"
                    onChange={this.saveSearch}
                />
                <RaisedButton label="Search" style={buttonStyle} primary={true} onClick={this.showMovies} />
                {temp}
            </div>
        )
    }
}
SearchMovies.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired
}
export default SearchMovies;
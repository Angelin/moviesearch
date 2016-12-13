import React from 'react';
import Request from 'superagent';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MovieList from './MovieList.jsx';
import CircularProgress from 'material-ui/CircularProgress';

export default class SearchMovies extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = { 
    		search: '',
            check: false,
            res_stat: '',
            movies: [],
            total_res: 0
    	};
        this.saveSearch = this.saveSearch.bind(this);
    	this.showMovies = this.showMovies.bind(this);
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
            th.setState({res_stat: moviesList.Response});
            if(moviesList.Response == 'True')
                th.setState({movies: moviesList.Search, total_res: moviesList.totalResults});
        });
  	}
    render() {
        var movie_list = '';
        var loading = '';
        if(this.state.check) {
            loading = <CircularProgress size={60} thickness={5} />;
        }
        if(this.state.check && this.state.res_stat == 'False') {
            loading = '';
            movie_list = <h3>Oops! No Movies Found...</h3>;
        }
        else if(this.state.check && this.state.movies.length>0) {
            loading = '';
            movie_list = <MovieList data={this.state.movies} totalResults={this.state.total_res}/>;
        }
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
                <div>
                    {loading}
                    {movie_list}
                </div>
            </div>
        )
    }
}
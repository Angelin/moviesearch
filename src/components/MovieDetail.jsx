import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';  
import PaperExampleSimple from './Papercomponent.jsx';
import SearchMovies from './SearchMovies.jsx';
import Request from 'superagent'

class CardExampleWithAvatar extends React.Component{
	getChildContext() {
		return { muiTheme: getMuiTheme(baseTheme)};
	}
	constructor(){
        super()
	this.state = {
    
    movies:{},
    Title:"",
    Year: "",
    Released:"",
    Rated:"",
    Genre:"",
    Director:"",
    Writer:"",
    Actors:"",
    Poster:"",
    Plot:"",
    Language:"",
    Country:"",
    Awards:"",
    imdbRating:""
	}
  };

	search() {

		let url =`http://www.omdbapi.com/?t=orphan`;
		let that = this;
		Request
         .get(url)
           .end(function(err, res){

           console.log(res.body.Year+"hello");
             that.setState({
             				Title:res.body.Title,
					         Year: res.body.Year,
					         Rated:res.body.Rated,
					         Released:res.body.Released,
					         Genre:res.body.Genre,
					         Director:res.body.Director,
					         Writer:res.body.Writer,
					         Actors:res.body.Actors,
					         Poster:res.body.Poster,
					         Plot:res.body.Plot,
					         Language:res.body.Language,
					         Country:res.body.Country,
					         Awards:res.body.Awards,
					         imdbRating:res.body.imdbRating
     });
   });
	}
	componentDidMount() {
		this.search();
	}
	render()
	{ 	
		return (
			<Card>
						
				<PaperExampleSimple poster={this.state.Poster}/>

				<CardTitle title ={this.state.Title } />
				<CardText className="data">
				<b>RATING:</b> {this.state.Rated} <br/>
				<b>GENRE</b>: {this.state.Genre}<br/>
				<b>RELEASED</b> : {this.state.Released}<br/>
				<b>DIRECTOR</b> : {this.state.Director}<br/>
				<b>WRITER</b> : {this.state.Writer}<br/>
				<b>ACTORS</b> : {this.state.Actors}<br/>
				<b>PLOT</b> : {this.state.Plot}<br/>
				<b>LANGUAGE</b> : {this.state.Language}<br/>
				<b>COUNTRY</b> : {this.state.Country}<br/>
				<b>AWARDS</b> : {this.state.Awards}<br/>
				<b>IMBD RATING</b> : {this.state.imdbRating}
				</CardText>
				<CardActions>
					<FlatButton label="back" href=" /#/search"/>
				</CardActions>
			</Card>
			);

	}
} 
CardExampleWithAvatar.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired
}

export default CardExampleWithAvatar;

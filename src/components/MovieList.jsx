import React from 'react';
import {Table, 
			TableBody, 
			TableHeader, 
			TableHeaderColumn, 
			TableRow, 
			TableRowColumn
		} from 'material-ui/Table';
import {Link} from 'react-router';

export default class MovieList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			page: ''
		this.pageNum = this.pageNum.bind(this);
	}
	componentWillMount(){
		var pagination = Math.round(this.props.totalResults/10);
		this.setState({page: this.pageNum(pagination)});
	}
	pageNum(pagination){
		var page = ''
		for(var i=1; i<=pagination; i++){
			page += <li>i</li>
		}
		return page;
	}
	render(){
		const imageStyle = {
			height: 80,
			width: 60
		}
		const tableHeaderStyle = {
			backgroundColor: '#555'
		}
		const tableRowStyle = {
			backgroundColor: '#ccc'
		}
		const tableHeaders = {
			fontSize: 20,
			color: '#eee'
		}
		var th = this;
		var showMovie =  this.props.data.map(function (movie, i) {
			if(movie.Poster == 'N/A')
				movie.Poster = './src/assets/img/image-not-available.png';
			return (
				<TableRow key={i} style={tableRowStyle}>
					<TableRowColumn><img src={movie.Poster} style={imageStyle}/></TableRowColumn>
					<TableRowColumn><Link to={`/movie/${movie.imdbID}`}>{movie.Title}</Link></TableRowColumn>
					<TableRowColumn>{movie.Year.substr(0,4)}</TableRowColumn>
					<TableRowColumn>{movie.Type}</TableRowColumn>
				</TableRow>
			);
		});
		console.log(this.state.page);
		return (
			<div>
				<Table>
					<TableHeader displaySelectAll={false}>
						<TableRow style={tableHeaderStyle}>
							<TableHeaderColumn style={tableHeaders} >Poster</TableHeaderColumn>
					        <TableHeaderColumn style={tableHeaders}>Name</TableHeaderColumn>
					        <TableHeaderColumn style={tableHeaders}>Year</TableHeaderColumn>
					        <TableHeaderColumn style={tableHeaders}>Genre</TableHeaderColumn>
						</TableRow>
					</TableHeader>
					<TableBody displayRowCheckbox={false} showRowHover={true}>
						{showMovie}
					</TableBody>
				</Table>
				<div>
					<span className="prevIcon">
						<i className="material-icons">arrow_backward</i>Prev
					</span>
					<ul>
						{this.state.page}
					</ul>
					<span className="nextIcon">
						Next<i className="material-icons">arrow_forward</i>
					</span>
				</div>
			</div>
		)
	}
}
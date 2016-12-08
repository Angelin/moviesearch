import React from 'react';
import ReactDOM from 'react-dom';
import Request from 'superagent';
import ResultsTable from './ResultsTable.jsx';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'title',rows:''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    let movieTitle = this.state.value,data=[],rows=[];
    event.preventDefault();

    Request.get('https://www.omdbapi.com/?s='+movieTitle)
    .set('Accept', 'application/json')
    .end(function(err, res){
      if (err || !res.ok) {
         alert('Oh no! error');
      } else {

        // this.setState({rows: JSON.stringify(res.body.Search)})
       rows = res.body.Search;

        ReactDOM.render(
          <ResultsTable rows={rows} />,
          document.getElementById('ResultsTable')
        );
      }
   });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SearchForm;
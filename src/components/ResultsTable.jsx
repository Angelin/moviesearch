import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class ResultsRow extends React.Component {
  render() {
    return (
       <TableRow>
        <TableRowColumn>{this.props.row.Title}</TableRowColumn>
        <TableRowColumn>{this.props.row.Year}</TableRowColumn>
        <TableRowColumn>{this.props.row.imdbID}</TableRowColumn>
        <TableRowColumn>{this.props.row.Type}</TableRowColumn>
        <TableRowColumn>{this.props.row.Poster}</TableRowColumn>
      </TableRow>
    );
  }
}


class ResultsHeader extends React.Component {
  render() {
    return (
        <TableHeaderColumn>{this.props.column}</TableHeaderColumn>
    );
  }
}

export default class ResultsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    rows : {}
    }
  }

  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme)};
  }

  render (){
    console.log('rows: ',this.props.rows);
    let rows = [],count =0,headers =[];
      this.props.rows.forEach((row) => {
        if(headers == ''){
          let headerArr = Object.keys(row);
           headerArr.forEach((header) => {
              headers.push(<TableHeaderColumn>{header}</TableHeaderColumn>);
           })
        } 
        rows.push(<ResultsRow key={count++} row={row} />);
    });
    
    console.log(rows);    
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn><TableRow>{headers}</TableRow></TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>{rows}</TableBody>
      </Table>
    );
  }
}

ResultsTable.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired
};
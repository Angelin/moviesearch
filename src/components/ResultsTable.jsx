import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class ResultsRow extends React.Component {
  render() {
    return (
       <TableRow>
        <TableRowColumn>{this.props.row.Title}</TableRowColumn>
      </TableRow>
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
    let rows = [],count =0;
      this.props.rows.forEach((row,key) => {
        if(row != ''){
          let headerArr = Object.keys(row);

           headers.push(<ResultsRow key={col+count++} row={row} />);
        }
        rows.push(<ResultsRow key={count++} row={row} />);
    });
    
    console.log(rows);    
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>{headers}</TableHeaderColumn>
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
import React from 'react';
import Paper from 'material-ui/Paper';

export default class MovieImage extends React.Component{
  render() {
    const style = {
      height: 300,
      width: 300,
      margin: 20,
      textAlign: 'center',
      display: 'inline-block',
      float: 'left'
    };
    const imgStyle = {
      height: '300px',
      width: '300px'
    }
    return(
        <Paper style={style} zDepth={1} >
          <img style={imgStyle} src={this.props.poster} />
        </Paper>
      );
  }
}
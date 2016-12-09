import React from 'react';
import Paper from 'material-ui/Paper';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme'; 


class MovieImage extends React.Component{
getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme)};
  }

  render()
  {
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

      <div>
        <Paper style={style} zDepth={1} >
          <img style={imgStyle} src={this.props.poster} />
        </Paper>
      </div>
      );
  }
}
MovieImage.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired
}
export default MovieImage;
import React from 'react';
import {IndexLink, Link} from 'react-router';
<<<<<<< HEAD
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton';

const navbar = {
    ul : {
    listStyleType: "none",
    margin: 0,
    padding: 0,
    overflow: 'hidden',
  
    },

    li : {
    float: 'left',
    color: 'white',
    },
    li2 : {
    display: 'block',
    color: 'white',
    textAlign: 'center',
    padding: '5px',
    textDecoration: 'none',

    }


    };
class Header extends React.Component {
    render() {
        const nav = <div style={navbar}>
                       <ul style={navbar.ul}>
                         <li style={navbar.li}><IndexLink style={navbar.li2} to="/" activeClassName="active"><FlatButton label="Home" hoverColor="#006080" labelStyle={{color:'white'}}/></IndexLink></li>
                         <li style={navbar.li}><Link style={navbar.li2} to="/search" activeClassName="active"><FlatButton label="Search" hoverColor="#006080" labelStyle={{color:'white'}}/></Link></li>
                         <li style={navbar.li}><Link style={navbar.li2} to="/contact" activeClassName="active"><FlatButton label="Contact" hoverColor="#006080" labelStyle={{color:'white'}}/></Link></li>                       
                       </ul>
                    </div>
      return (
        <div>
            <MuiThemeProvider>
               <AppBar
                    title="MoviePedia"
                    iconElementRight={nav}/>
            </MuiThemeProvider>
            
        </div>
      );
=======

class Header extends React.Component {
    render() {
      return (
        <div>
            <h1>Movie Search</h1>
            <ul className="header">
                <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
                <li><Link to="/search" activeClassName="active">Search Movies</Link></li>
                <li><Link to="/contact" activeClassName="active">Contact</Link></li>
            </ul>
        </div>
      )
>>>>>>> 357832c16dac6e69f89d6ecb5ea0e9949491bdd9
    }
}

export default Header;
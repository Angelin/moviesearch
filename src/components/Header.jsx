import React from 'react';
import {IndexLink, Link} from 'react-router';

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
    }
}

export default Header;
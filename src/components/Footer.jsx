import React from 'react';
import Toolbar from 'material-ui/Toolbar';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class Footer extends React.Component {
	getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme)};
    }
    render() {
    	const style = {
	    	textAlign: 'center',
            background: 'rgb(0, 188, 212)',
            padding: 0.1,
            color: '#fff',
            fontFamily: 'sans-serif',
            fontSize: 11
	    }
        return (
            <footer style={style}>
                <p>
                    Facebook | Google Plus | Twitter | Youtube
                </p>
                <p>
                    Copyright 2016 moviesearch.com. All rights reserved.
                </p>
            </footer>
        )
    }
}
Footer.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired
}
export default Footer;
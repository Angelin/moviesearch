import React from 'react';

export default class Footer extends React.Component {
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
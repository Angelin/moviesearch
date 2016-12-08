import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="content">
                    {this.props.children}
                </div>
                <Footer />

            </div>
        )
    }
}

export default App;
import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import ResultsTable from './ResultsTable.jsx';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rows : [{'name':'dsfd'},{'name':'232'}]
        }
    }  

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
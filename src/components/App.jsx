import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
<<<<<<< HEAD

class App extends React.Component {
=======
import ResultsTable from './ResultsTable.jsx';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rows : [{'name':'dsfd'},{'name':'232'}]
        }
    }  

>>>>>>> 357832c16dac6e69f89d6ecb5ea0e9949491bdd9
    render() {
        return (
            <div>
                <Header />
<<<<<<< HEAD
=======
               
>>>>>>> 357832c16dac6e69f89d6ecb5ea0e9949491bdd9
                <div className="content">
                    {this.props.children}
                </div>
                <Footer />
<<<<<<< HEAD
=======

>>>>>>> 357832c16dac6e69f89d6ecb5ea0e9949491bdd9
            </div>
        )
    }
}

export default App;
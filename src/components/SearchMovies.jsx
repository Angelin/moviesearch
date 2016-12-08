import React from 'react';
import SearchForm from './SearchForm.jsx';

class SearchMovies extends React.Component {
      render() {
        return (
            <div>
                <h1>Search Movies</h1>
                <SearchForm />
                <div id="ResultsTable"></div>  
            </div>
        )
    }
}

export default SearchMovies;
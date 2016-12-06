var destination = document.querySelector("#container");

    var { Router, Route, IndexRoute, hashHistory, IndexLink, Link } = ReactRouter

    var Home = React.createClass({
      render: function() {
          return (
            <div>
              <h2>Home</h2>
              <p>Home</p>
            </div>
          );
        }
    });

    var Contact = React.createClass({
      render: function() {
          return (
            <div>
              <h2>GOT QUESTIONS?</h2>
              <p>Contact</p>
            </div>
          );
        }
    });

    var Search = React.createClass({
      render: function() {
          return (
            <div>
              Search 
            </div>
          );
        }
    });

    var FourOhFour = React.createClass({
      render: function() {
          return (
            <div>
              <h2>NOPE</h2>
              <p>This page is missing. Maybe it never existed.
              Maybe we never existed. What if nothing is real?</p>
            </div>
          );
        }
    });


    var App = React.createClass({
      render: function() {
        return (
          <div>
            <h1>Movie Search</h1>
            <ul className="header">
              <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
              <li><Link to="/search" activeClassName="active">Search Movies</Link></li>
              <li><Link to="/contact" activeClassName="active">Contact</Link></li>
            </ul>
            <div className="content">
              {this.props.children}
            </div>
          </div>
        )
      }
    });

    ReactDOM.render((
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="search" component={Search} />
          <Route path="contact" component={Contact} />
          <Route path='*' component={FourOhFour} />
        </Route>

      </Router>
    ), destination);
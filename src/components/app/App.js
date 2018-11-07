import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
// import { PropTypes } from 'prop-types';
// import { connect } from 'react-redux';
import Header from './Header';
// import Footer from './Footer';
import Home from './Home';


class App extends PureComponent {

  static propTypes = {

  }

  componentDidMount() {

  }

  render() {

    return (
      // <h1>Hello</h1>
      <Router>

        <div className="app-container">
          <Header/>
          <main>
            <div className="switch">
              <Switch>
                <Route exact path="/" component={Home}/>
                <Redirect to="/"/>
              </Switch>
            </div>
          </main>

          {/* <Footer/> */}
        </div>

      </Router>
    );
  }
}

export default App;

import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
// import { PropTypes } from 'prop-types';
// import { connect } from 'react-redux';
import Header from './Header';
// import Footer from './Footer';
import Home from './Home';
import Postcards from './Postcards';
import styles from './App.css';


class App extends PureComponent {

  static propTypes = {

  }

  componentDidMount() {

  }

  render() {

    return (
      <Router>

        <div className="app-container">
          <Header/>
          <main className={styles.app}>
            <div className="switch">
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/postcards" component={Postcards}/>
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

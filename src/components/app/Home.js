import React, { Component } from 'react';
import styles from './Home.css';


class Home extends Component {

  render() {
    return (
      <div className={styles.home}>
        <h2>Welcome to Vintage Postcard Market</h2>
        <div className="container">
          <p></p>
        </div>
      </div>
    );
  }
}

export default Home;
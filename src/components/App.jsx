import React, { Component } from 'react';
import Menu from './Menu';

class App extends Component {
  /**
   * Westerosi is plural, westerosus is singular
   *
   */

  render() {
    return (
      <section className="container">
        <div className="row">
          <Menu />
        </div>
        <div className="row">
          { this.props.children }
        </div>
      </section>
    );
  }

}

export default App;

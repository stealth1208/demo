import React, { Component } from 'react';
import { Header } from './components';
import { HomepageContainer } from './containers';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Header /> */}
        <HomepageContainer />
      </div>
    );
  }
}

export default App;

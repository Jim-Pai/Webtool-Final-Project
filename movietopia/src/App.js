import React, { Component } from 'react';
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
            <HomePage/>
            {/*<LoginPage/>*/}
        </div>
    );
  }
}

export default App;

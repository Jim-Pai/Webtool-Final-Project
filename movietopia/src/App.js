import React, { Component } from 'react';
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import MoviePage from "./MoviePage";
import SearchPage from "./SearchPage";
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state={qualifiedUser:false}
        this.onLogin = this.onLogin.bind(this);
    }
    onLogin= () => {
        this.setState({qualifiedUser: true})
    }
  render() {
    return (
        <div>
            {/*{this.state.qualifiedUser ? <LoginPage/> : <HomePage submit={this.onLogin}/>}*/}
            {/*<SearchPage/>*/}
            <MoviePage/>
        </div>
    );
  }
}

export default App;

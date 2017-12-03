import React, { Component } from 'react';
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import SearchPage from "./SearchPage";
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state={
            inLoginPage: false,
            isLogin: false,
            currentUser: ''
        };
        this.goToLoginPage = this.goToLoginPage.bind(this);
        this.onLogin = this.onLogin.bind(this);
        this.onLogout = this.onLogout.bind(this);
    }
    
    goToLoginPage = () => {
        this.setState({inLoginPage: true});
    }
    
    onLogin = (username) => {
        this.setState({
            inLoginPage: true,
            currentUser: username,
            isLogin: true
        });
    }
    
    onLogout = () => {
        this.setState({
            inLoginPage: false,
            currentUser: '',
            isLogin: false
        });
    }
    
  render() {
    return (
        <div>
            {this.state.inLoginPage ? 
             !this.state.isLogin && <LoginPage onLogin={this.onLogin}/> 
            : 
             <HomePage submit={this.goToLoginPage}/>}
        
            {this.state.inLoginPage && this.state.isLogin && <SearchPage user={this.state.currentUser}
            onLogout={this.onLogout}/>}
        </div>
    );
  }
}

export default App;

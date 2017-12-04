import React, { Component } from 'react';
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import SearchPage from "./SearchPage";
import UserPage from "./UserPage";
import Header from "./HeaderBar";
import Footer from "./FooterBar";
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state={
            onHomePage:true,
            qualifiedUser:false,
            onMoviePage:false,
            onUserPage:false,
            onSearchPage:false
        }
        this.onLogin = this.onLogin.bind(this);
    }
    onLogin= () => {
        this.setState({qualifiedUser: true})
    }
    loadUserPage = () => {
        this.setState({
            onHomePage: false,
            onUserPage: true
        })
    }
    loadSearchPage = () => {
        this.setState({
            onHomePage: false,
            onSearchPage: true
        })
    }
    onLogOut = () => {
        this.setState({
            onHomePage: true,
            qualifiedUser: false
        })
    }

  render() {
    return (
        <div>
            <Header userPage={this.loadUserPage} searchPage={this.loadSearchPage} logOut={this.onLogOut}/>
            {this.state.onHomePage && <HomePage submit={this.onLogin}/>}
            {this.state.qualifiedUser && this.state.onHomePage && <LoginPage/>}
            {this.state.qualifiedUser && this.state.onUserPage && <UserPage/>}
            {this.state.qualifiedUser && this.state.onSearchPage && <SearchPage/>}
            <Footer/>
        </div>
    );
  }
}

export default App;

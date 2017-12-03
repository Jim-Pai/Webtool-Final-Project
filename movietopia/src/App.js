import React, { Component } from 'react';
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import MoviePage from "./MoviePage";
import SearchPage from "./SearchPage";
import './App.css';
import {saveReviews, saveComments} from './heroku';

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
        this.addUserReview = this.addUserReview.bind(this);
        this.addMovieComment = this.addMovieComment.bind(this);
        this.deleteUserReview = this.deleteUserReview.bind(this);
    }
    
    goToLoginPage = () => {
        this.setState({inLoginPage: true});
    }
    
    onLogin = ({username, token, reviews, comments}) => {
        this.setState({
            inLoginPage: true,
            currentUser: username,
            isLogin: true,
            token,
            reviews,
            comments
        });
    }
    
    onLogout = () => {
        this.setState({
            inLoginPage: false,
            currentUser: '',
            isLogin: false
        });
    }
    
    addUserReview = (username, review) => {
        const allUserReviews = Object.assign({}, this.state.reviews);
        if(!allUserReviews.username) {
            allUserReviews.username = [];
        }
        allUserReviews.username.push(review);
        saveReviews(this.state.token, allUserReviews);
        this.setState({reviews: allUserReviews});
    }
    
    addMovieComment = (movieTitle, comment) => {
        const allMovieComments = Object.assign({}, this.state.comments);
        if(!allMovieComments.movieTitle) {
            allMovieComments.movieTitle = [];
        }
        allMovieComments.movieTitle.push(comment);
        saveComments(this.state.token, allMovieComments);
        this.setState({comments: allMovieComments});
    }
    
    deleteUserReview = (username, index) => {
        const allUserReviews = Object.assign({}, this.state.reviews);
        allUserReviews.username.splice(index, 1);
        saveReviews(this.state.token, allUserReviews);
        this.setState({reviews: allUserReviews});
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

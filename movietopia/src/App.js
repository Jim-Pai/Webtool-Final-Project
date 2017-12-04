import React, { Component } from 'react';
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
//import MoviePage from "./MoviePage";
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
        this.addUserReview = this.addUserReview.bind(this);
        this.addMovieComment = this.addMovieComment.bind(this);
        this.deleteUserReview = this.deleteUserReview.bind(this);
        this.getReviews = this.getReviews.bind(this);
        this.getComments = this.getComments.bind(this);
    }
    
    goToLoginPage = () => {
        this.setState({inLoginPage: true});
    }
    
    onLogin = ({username, token}) => {
        this.setState({
            inLoginPage: true,
            currentUser: username,
            isLogin: true,
            token,
        });
    }
    
    getReviews = (reviews) => {
        this.setState({reviews});
    }
    
    getComments = (comments) => {
        this.setState({comments});
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
        if(!allUserReviews[username]) {
            allUserReviews[username] = [];
        }
        allUserReviews[username].push(review);
        this.setState({reviews: allUserReviews});
    }
    
    addMovieComment = (movieTitle, comment) => {
        const allMovieComments = Object.assign({}, this.state.comments);
        const user = comment.user;
        const comments = comment.comments;
        if(!allMovieComments[movieTitle]) {
            allMovieComments[movieTitle] = [];
        }
        allMovieComments[movieTitle].push(comment);
        this.addUserReview(user, {movieTitle, comments});
        fetch(`//localhost:8000/review/${user}/${movieTitle}`, {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({comment}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        this.setState({comments: allMovieComments});
    }
    
    deleteUserReview = (movieTitle, comment, index) => {
        const allUserReviews = Object.assign({}, this.state.reviews);
        const allMovieComments = Object.assign({}, this.state.comments);
        const user = comment.user;
        allUserReviews[user].splice(index, 1);
        this.removeFirstObject(allMovieComments[movieTitle], comment);
        
        fetch(`//localhost:8000/review/${user}/${movieTitle}`, {
            method: 'DELETE',
            credentials: 'include',
            body: JSON.stringify({comment, index}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        this.setState({reviews: allUserReviews, comments: allMovieComments});
    }
    
    const removeFirstObject = (arr, target) => {
        for(i in arr) {
            let dup = true;
            for(key in arr[i]) {
                if(arr[i][key] !== target[key]) {
                    dup = false;
                }
            }
            if(dup) {
                arr.splice(i, 1);
                break;
            }
        }
    }
    
  render() {
    return (
        <div>
            {this.state.inLoginPage ? 
             !this.state.isLogin && <LoginPage onLogin={this.onLogin} onGetReviews={this.getReviews} onGetComments={this.getComments}/> 
            : 
             <HomePage submit={this.goToLoginPage}/>}
        
            {this.state.inLoginPage && this.state.isLogin && <SearchPage user={this.state.currentUser}
            onLogout={this.onLogout} comments={this.state.comments} addComment={this.addMovieComment}/>}
        </div>
    );
  }
}

export default App;

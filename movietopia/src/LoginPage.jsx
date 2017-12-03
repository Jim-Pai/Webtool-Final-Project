import React, {Component} from 'react';
import './index.css';
import {login, signup} from './login';
import {getAuthorization, getReviews, getComments} from './heroku';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.updateUsername = this.updateUsername.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
    }

    updateUsername = (e) => {
        this.setState({username: e.target.value});
    };

    updatePassword = (e) => {
        this.setState({password: e.target.value});
    };

    onLogin = () => {
        const {username, password} = this.state;
        let token = '';
        let username = '';
        let reviews = {};
        let comments = {};
        
        login(username, password)
        .then(loginInfo => {
            username = loginInfo.username;
            
            getAuthorization()
            .then(adminInfo => {
                token = adminInfo.token;
                
                getReviews(token)
                .then(details => {
                    reviews = details;
                });
                
                getComments(token)
                .then(details => {
                    comments = details;
                });
                
            })
            
        })
        .catch(e => console.log(e));
        
        this.props.onLogin({username, token, reviews, comments});
    };

    createAccount = () => {
        const {username, password} = this.state;
        signup(username, password);
    };

    render() {
        return (
        <div className="hp-head">
            <div className="hp-title">
                <div className="login-form">
                    <p className="login-title">Welcome to Movietopia</p>
                    <form>
                        <div className="user-name">
                            <label>Username:</label>
                            <input className="form-control"
                                   placeholder="username..."
                                   onChange={this.updateUsername}/>
                        </div>
                        <div className="password">
                            <label>Password:</label>
                            <input className="form-control"
                                   placeholder="password..."
                                   onChange={this.updatePassword}/>
                        </div>
                    </form>
                    <div className="login-button">
                        <button onClick={this.onLogin}>Login</button>
                        <button onClick={this.createAccount}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>

        );
    }
}
export default LoginPage;
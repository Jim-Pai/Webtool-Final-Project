import React, {Component} from 'react';
import './index.css';

class HeaderBar extends Component {
    constructor(props){
        super(props);
        this.state={user: 'Lynne'}
    }

    render() {
        return(
            <div id="wrapper">
                <ul className="nav">
                    <li className="left">Hi, {this.state.user}</li>
                    <li className="right" onClick={this.props.logOut}>Log out</li>
                    <li className="right" onClick={this.props.userPage}>Profile</li>
                    <li className="right" onClick={this.props.searchPage}>Movie</li>
                </ul>
            </div>
        );
    }
}

export default HeaderBar;
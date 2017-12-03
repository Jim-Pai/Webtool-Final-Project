import React, {Component} from 'react';
import './index.css';

class HeaderBar extends Component {
    constructor(props){
        super(props);
        this.state={user: 'Lynne'}
    }

    render() {
        return(
            <div>
                <div className="movie-header">
                    <div>Hi {this.state.user}</div>
                    <div className="right">Movie</div>
                    <div className="right">Profile</div>
                    <div className="right">Log out</div>
                </div>
            </div>
        );
    }
}

export default HeaderBar;
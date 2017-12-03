import React, {Component} from 'react';
import './index.css';
import Footer from './FooterBar';
import logo from './ic_movie_black_24px.svg';
import deleteLogo from './ic_delete_black_24px.svg';

class UserPage extends Component {
    constructor(props) {
        super(props);
        this.state={
            user: 'Lynne',
            commentHistory: [
                {movie: 'Leon' , comment: 'What a good movie'},
                {movie: 'La La Land' , comment: 'Great movie'},
                {movie: 'Black Swan' , comment: 'What a good movie, Love Love'}
                ]
        }
    }

    render() {
        return(
            <div className="up-container">
                <div className="up-title">Hi, {this.state.user}</div>
                <div className="up-history">
                    {this.state.commentHistory.map( (history, index) => {
                        return(
                            <div className="up-section" key={index}>
                                <div className="mp-comments-user">
                                    <img src={logo}/>
                                    <p>{history.movie}: </p>
                                </div>

                                <div className="up-comment">
                                    <p>{history.comment}</p>
                                    <img className="up-delete" src={deleteLogo}/>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <Footer/>
            </div>
        );
    }
}

export default UserPage;
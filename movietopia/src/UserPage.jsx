import React, {Component} from 'react';
import './index.css';
import logo from './ic_movie_black_24px.svg';
import deleteLogo from './ic_delete_black_24px.svg';

class UserPage extends Component {
    constructor(props) {
        super(props);
        this.state={
            commentHistory: [
                {movie: 'Leon' , comment: 'What a good movie'},
                {movie: 'La La Land' , comment: 'Great movie'},
                {movie: 'Black Swan' , comment: 'What a good movie, Love Love'}
                ]
        }
    }
    deleteComment = (e) => {
        const comments = [...this.state.commentHistory];
        comments.map((comment, index) => {
            {e.index == index && comments.splice(index, 1)}
        })
        this.setState({
            commentHistory:comments
        })

    }

    render() {
        return(
            <div className="up-container">
                <div className="up-title">Hi, {this.props.user}</div>
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
                                    <img className="up-delete" src={deleteLogo} onClick={() => this.deleteComment({index})}/>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default UserPage;
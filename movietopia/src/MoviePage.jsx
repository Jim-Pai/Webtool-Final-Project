import React, {Component} from 'react';
import image from './movie-temp.jpg';
import './index.css';
import MovieComments from './MovieComments';



class MoviePage extends Component {
    constructor(props){
        super(props);
        this.state={
            comments : [
                {user: 'Lynne' , comments: 'This movie is really awesome'},
                {user: 'Yalin' , comments:  'This movie is really awesome, I lovin it, its my favourite movie'},
                {user: 'Pai' , comments:  'This movie is really awesome, I cannot love it more'}
            ],
            newComments: '',
            user: 'Lynne'
        }
        this.addComments = this.addComments.bind(this);
        this.setNewComments = this.setNewComments.bind(this);
    }
    setNewComments = (e) => {
        this.setState({newComments:e.target.value})
    }

    addComments =() => {

        if(this.state.newComments) {
            const newList = [...this.state.comments];
            newList.push({user: this.state.user ,comments: this.state.newComments});
            this.setState({comments: newList});
        }
    }
    render() {
        return(
            <div>
                <div className="mp-container">
                    <div className="mp-movie-outer">
                        <div className="mp-movie">
                            <img src={image}/>
                            <div className="mp-movie-intro">
                                <p>Name: <span>Leon</span></p>
                                <p>Director: <span>Yalin</span></p>
                                <p>Year: <span>2017</span></p>
                                <p>Runtime: <span>135min</span></p>
                                <p>Score: <span>10.0</span></p>
                                <p>Genre: <span>Cartoon</span></p>
                                <p>Country: <span>USA</span></p>
                                <p>Actors:</p>
                                <ul>
                                    <li>Yalin</li>
                                    <li>Lynne</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <MovieComments movieComments={this.state.comments}/>

                    <p>Leave your comments at here:</p>
                    <div className="mp-comments">
                        <textarea rows="10" cols="auto" onChange={this.setNewComments}></textarea>
                        <button onClick={this.addComments}>Submit</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default MoviePage;
import React, {Component} from 'react';
import image from './movie-temp.jpg';
import './index.css';
import MovieComments from './MovieComments';



class MoviePage extends Component {
    constructor(props){
        super(props);
        this.state={
            newComments: ''
        }
        this.addComments = this.addComments.bind(this);
        this.setNewComments = this.setNewComments.bind(this);
        console.log(this.props.comments);
            console.log(this.props.movie.Title);
            console.log(this.props.comments[this.props.movie.Title]);
    }
    
    setNewComments = (e) => {
        this.setState({newComments:e.target.value});
    }
    
    addComments =() => {
        if(this.state.newComments) {
            const comment = {user: this.props.user , comments: this.state.newComments};
            this.props.addComment(this.props.movie.Title, comment);
        }
    }
    
    render() {
        const movie = this.props.movie;
        const actors = movie.Actors.split(',');
        return(
            <div>
                <div className="mp-container">
                    <div className="mp-movie-outer">
                        <div className="mp-movie">
                            <img src={movie.Poster}/>
                            <div className="mp-movie-intro">
                                <p>Name: <span>{movie.Title}</span></p>
                                <p>Director: <span>{movie.Director}</span></p>
                                <p>Year: <span>{movie.Year}</span></p>
                                <p>Runtime: <span>{movie.Runtime}</span></p>
                                <p>Score: <span>{movie.imdbRating}</span></p>
                                <p>Genre: <span>{movie.Genre}</span></p>
                                <p>Country: <span>{movie.Country}</span></p>
                                <p>Actors:</p>
                                <ul>
                                    {actors.map( (actor, index) => {
                                        return (<li key={index}>{actor}</li>)
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <MovieComments movieComments={this.props.comments[this.props.movie.Title] ? this.props.comments[this.props.movie.Title] : []}/>

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
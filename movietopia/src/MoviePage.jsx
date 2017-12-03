import React, {Component} from 'react';
import image from './movie-temp.jpg';
import './index.css';


class MoviePage extends Component {
    constructor(props){
        super(props);
        this.state={}
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
                    <p>Leave your comments at here:</p>

                    <div className="mp-comments">
                        <textarea rows="10" cols="200"></textarea>
                    </div>
                    <p>Movie lover's comments:</p>
                    <div className="mp-movie-comments">

                    </div>
                </div>
            </div>
        );
    }
}

export default MoviePage;
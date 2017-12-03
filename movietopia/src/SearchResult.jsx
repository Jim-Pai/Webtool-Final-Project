import React, {Component} from 'react';
import image from './movie-temp.jpg';
import './index.css';


class SearchResult extends Component {

    render() {
        return(
            <div>
                <div className="sr-container">
                    <div className="sr-movie">
                        <img src={this.props.result.Poster}/>
                        <div className="movie-intro">
                            <p>Name: <span>{this.props.result.Title}</span></p>
                            <p>Year: <span>{this.props.result.Year}</span></p>
                            <p>Score: <span>{this.props.result.imdbRating}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchResult;
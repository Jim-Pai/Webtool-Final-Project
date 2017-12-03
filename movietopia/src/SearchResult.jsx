import React, {Component} from 'react';
import image from './movie-temp.jpg';
import './index.css';


class SearchResult extends Component {

    render() {
        return(
            <div>
                <div className="sr-container">
                    <div className="sr-movie">
                        <img src={image}/>
                        <div className="movie-intro">
                            <p>Name: <span>Leon</span></p>
                            <p>Year: <span>2017</span></p>
                            <p>Score: <span>10.0</span></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchResult;
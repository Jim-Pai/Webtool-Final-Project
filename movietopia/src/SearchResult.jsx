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

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchResult;
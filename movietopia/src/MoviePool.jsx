import React, {Component} from 'react';
import image from './movie-temp.jpg';
import './index.css';


class MoviePool extends Component {

    render() {
        return(
            <div className="movie-pool">
                <div className="movie-container">
                    <div className="movie">
                        <img src={image}/>
                        <p>Leon</p>
                    </div>
                    <div className="movie">
                        <img src={image}/>
                        <p>Leon</p>
                    </div>
                    <div className="movie">
                        <img src={image}/>
                        <p>Leon</p>
                    </div>
                    <div className="movie">
                        <img src={image}/>
                        <p>Leon</p>
                    </div>
                    <div className="movie">
                        <img src={image}/>
                        <p>Leon</p>
                    </div>
                    <div className="movie">
                        <img src={image}/>
                        <p>Leon</p>
                    </div>
                    <div className="movie">
                        <img src={image}/>
                        <p>Leon</p>
                    </div>

                    <div className="movie">
                        <img src={image}/>
                        <p>Leon</p>
                    </div>
                    <div className="movie">
                        <img src={image}/>
                        <p>Leon</p>
                    </div>
                    <div className="movie">
                        <img src={image}/>
                        <p>Leon</p>
                    </div>
                    <div className="movie">
                        <img src={image}/>
                        <p>Leon</p>
                    </div>
                    <div className="movie">
                        <img src={image}/>
                        <p>Leon</p>
                    </div>



                </div>
            </div>
        );
    }
}

export default MoviePool;
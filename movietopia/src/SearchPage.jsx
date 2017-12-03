import React, {Component} from 'react';
import MoviePool from './MoviePool';
import SearchResult from './SearchResult';
import './index.css';


class SearchPage extends Component {
    constructor(){
        super();
        this.state={movieWonder:false}
        this.findMovie = this.findMovie.bind(this);
    }

    findMovie = () => {
        this.setState({movieWonder:true})
    }

    render() {
        return(
            <div>
                <div className="sp-search">
                    <div className="sp-input">
                        <input placeholder=" Search your favourite movie..."/>
                        <button onClick={this.findMovie}>GO!</button>
                    </div>
                </div>
                {this.state.movieWonder && <SearchResult/>}
                <MoviePool/>
            </div>
        );
    }
}

export default SearchPage;
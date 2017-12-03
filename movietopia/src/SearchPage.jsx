import React, {Component} from 'react';
import MoviePool from './MoviePool';
import SearchResult from './SearchResult';
import './index.css';


class SearchPage extends Component {
    constructor(){
        super();
        this.state={
            movieWonder:false,
            movieTitle: '',
            searchResult: {}
        };
        this.findMovie = this.findMovie.bind(this);
        this.handleMovieTitleInput = this.handleMovieTitleInput.bind(this);
    }

    findMovie = () => {
        const title = this.state.movieTitle;
        this.setState({movieWonder: true});
        fetch(`//localhost:8000/movie/${title}`, {
            method: 'GET',
            credential: 'include'
        })
        .then(r => r.ok ? r.json() : r.json().then( j => Promise.reject(j) ))
        .then(j => {
            console.log(j);
            this.setState({searchResult: j});
        })
        .catch(e => console.log(e));
    };
    
    handleMovieTitleInput = (e) => {
        this.setState({movieTitle: e.target.value});
    };

    render() {
        return(
            <div>
                <button onClick={this.props.onLogout}>Log {this.props.user} out</button>
                <div className="sp-search">
                    <div className="sp-input">
                        <input onChange={this.handleMovieTitleInput} placeholder=" Search your favourite movie..."/>
                        <button onClick={this.findMovie}>GO!</button>
                    </div>
                </div>
                {this.state.movieWonder ? <SearchResult result={this.state.searchResult}/> : <div></div>}
                <MoviePool/>
            </div>
        );
    }
}

export default SearchPage;
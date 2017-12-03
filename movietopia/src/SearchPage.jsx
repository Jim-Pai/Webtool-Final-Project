import React, {Component} from 'react';
import MoviePool from './MoviePool';
import SearchResult from './SearchResult';
import AutoComplete from './AutoComplete';
import './index.css';


class SearchPage extends Component {
    constructor(){
        super();
        this.state={
            movieWonder:false,
            movieTitle: '',
            searchResult: {},
            hints: [],
            showHints: false
        };
        this.findMovie = this.findMovie.bind(this);
        this.handleMovieTitleInput = this.handleMovieTitleInput.bind(this);
        this.setMovieTitle = this.setMovieTitle.bind(this);
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
        if(e.target.value) {
            fetch(`//localhost:8000/movie/search/${e.target.value}`, {
                method: 'GET',
                credential: 'include'
            })
            .then(r => r.ok ? r.json() : r.json().then( j => Promise.reject(j) ))
            .then(j => {
                if(!j.Error && j.Search) {
                    this.setState({hints: j.Search});
                }
                else {
                    console.warn('Empty');
                    this.setState({hints: []});
                }
            })
        }
        
        this.setState({movieTitle: e.target.value, showHints: true});
    };

    setMovieTitle = (movieTitle) => {
        this.setState({movieTitle, showHints: false});
    }

    render() {
        return(
            <div>
                <button onClick={this.props.onLogout}>Log {this.props.user} out</button>
                <div className="sp-search">
                    <div className="sp-input">
                        <input value={this.state.movieTitle} onChange={this.handleMovieTitleInput} placeholder=" Search your favourite movie..."/>
                        <button onClick={this.findMovie}>GO!</button>
                        {this.state.showHints && <AutoComplete hints={this.state.hints} setMovie={this.setMovieTitle}/>}
                    </div>
                </div>
                
                {this.state.movieWonder && <SearchResult result={this.state.searchResult}/>}
                <MoviePool/>
            </div>
        );
    }
}

export default SearchPage;
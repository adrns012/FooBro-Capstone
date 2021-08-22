import React, { Component } from 'react';
import TitleCard from './TitleCard';
import Axios from 'axios';
import queryString from 'query-string';


class TitleList extends Component {
    state = { movies: [] }

    componentDidMount() {
        this.fetchMovies();
    }

    componentDidUpdate(prevProps) {
        if(this.props.location !== prevProps.location) {
            this.fetchMovies();
        }
    }

    fetchMovies = () => {
        let q = queryString.parse(this.props.location.search);
        Axios.get(`http://www.omdbapi.com/?apikey=7743eb6f&s=${q.searchText}`)
            .then(resp=>resp.data)
            .then(data=>data.Search)
            .then(movies=>this.setState({movies}))
    }

    render() {
        const titleList = this.state.movies.map((m, index) => <TitleCard movie={m} key={index} />)
        return (
            <div className="row">
                {titleList}
            </div>
        );
    }
}

export default TitleList;
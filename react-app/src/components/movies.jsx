import React, { Component } from 'react';
import ListGroup from './common/listGroup';
import Like from './common/like';
import Pagination from './common/pagination';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import { pagniate }  from '../utils/paginate';

class Movies extends Component{
    state = {
        movies: [],
        pageSize: 4,
        currentPage: 1,
        genres: []
        // count: getMovies().length
    }

    componentDidMount(){
        const genres = [{name: "All Genres"}, ...getGenres()]
        this.setState({ movies: getMovies(), genres});
    }

    //using id and deleteMovie service
    // handleDelete(id){
    //     console.log(id);
    //     // deleteMovie(id);
    //     this.setState({count: this.state.count-1});
    //     this.setState({movies: this.state.movies});
    // }

    //using filter method
    handleDelete = movie => {
        // this.setState({count: this.state.count-1});
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({ movies });
    }

    handleLike = m =>{
        const mvs = [...this.state.movies];
        const index = mvs.indexOf(m);
        m[index] = {...mvs[index]};
        // console.log("movies with index: ", movies[index]);
        mvs[index].liked = !m[index].liked;
        this.setState({ movies: mvs })
    }

    handlePageChange = page =>{
        this.setState({currentPage: page})
    }

    handleGenreSelect = genre =>{
        this.setState({ selectedGenre: genre, currentPage: 1 })
        console.log("genere: ", genre);
    }

    render(){
        const { length: count } = this.state.movies;
        const { pageSize, currentPage, selectedGenre, movies: allMovies } = this.state;

        if(count === 0) return <p>There are no movies in the database</p>

        const filteredMovies = selectedGenre && selectedGenre._id 
        ? allMovies.filter(m => m.genre._id === m.selectedGenre._id) 
        : allMovies;
        const movies = pagniate(filteredMovies, currentPage, pageSize);

        return(
            <div className='row'>
            <div className="col-3">
            <ListGroup 
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect}
            />
            </div>
            <div className="col">
            <p>Showing {filteredMovies.length} moives in the database</p>
            <table className="table">
            <thead>
                <tr>
                <th scope="col">Title</th>
                <th scope="col">Genere</th>
                <th scope="col">Stock</th>
                <th scope="col">Rate</th>
                <th></th>
                </tr>
            </thead>
            <tbody>
                    {movies.map(movie => (
                        <tr  key={movie._id}>
                        <td>{movie.title}</td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.numberInStock}</td>
                        <td>{movie.dailyRentalRate}</td>
                        <td><Like liked={movie.liked} onClick={() => this.handleLike(movie)}/></td>
                        <td>
                            <button onClick={() =>this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button>
                        </td>
                    </tr>
                    ))}
            </tbody>
            </table>
            <Pagination 
            itemsCount={filteredMovies.length} 
            pageSize={pageSize} 
            onPageChange={this.handlePageChange}
            currentPage={currentPage}/>
            </div>
            </div>
        );
    }
}

export default Movies;
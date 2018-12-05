import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

class Movies extends Component{
    state = {
        movies: getMovies(),
        // count: getMovies().length
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

    render(){
        const { length: count } = this.state.movies;
        if(count === 0) return <p>There are no movies in the database</p>
        return(
            <React.Fragment>
                            <p>Showing {count} moives in the database</p>
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
                    {this.state.movies.map(movie => (
                        <tr  key={movie._id}>
                        <td>{movie.title}</td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.numberInStock}</td>
                        <td>{movie.dailyRentalRate}</td>
                        <td>
                            <button onClick={() =>this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button>
                        </td>
                    </tr>
                    ))}
            </tbody>
            </table>
            </React.Fragment>
        );
    }
}

export default Movies;
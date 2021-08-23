import { getMovies } from "../services/Movies"
import React, { Component } from 'react'
import Like from "./Like";


export class Paginator extends Component {

  state={
    movies: []
  };

  onDelete(id){
      this.setState({movies : this.state.movies.filter(movie=>(
        movie.id!=id
      ))
      }
      )
  }

  constructor(){
    super();
    this.state.movies=getMovies();
  }
  
  

    render(){

      const length = this.state.movies.length;

      if(length==0)
      return <p className="my-5 mx-5">No Movies in the database</p>



    return (
      <React.Fragment>

      <p className="my-5 mx-5">Showing {length} movies from the database</p>

        <div className="mx-5 my-5">
            <table className="table table-dark mx-auto">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Genre</th>
      <th scope="col">Rating</th>
      <th scope="col">Delete</th>
      <th scope="col">Like</th>
      
    </tr>
  </thead>
  <tbody>
    {
      this.state.movies.map(movie=>(
            <tr>
            <td scope="col">{movie.name}</td>
            <td scope="col">{movie.type}</td>
            <td scope="col">{movie.rating}</td>
            <td><button className="btn btn-danger" onClick={()=>{this.onDelete(movie.id)}}>Delete</button></td>
            <td><Like/></td>
            </tr>   
      ))
    } 
  </tbody>
</table>

<nav aria-label="...">
  <ul className="pagination">
    <li className="page-item disabled">
      <a className="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
    </li>
    <li className="page-item"><a className="page-link" href="#">1</a></li>
    <li className="page-item active" aria-current="page">
      <a className="page-link" href="#">2 </a>
    </li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item">
      <a className="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
        </div>
        </React.Fragment>
    );
    }
}

export default Paginator

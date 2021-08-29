import { getMovies } from "../services/Movies"
import React, { Component } from 'react'
import Like from "./Like";
import PaginatorComponent from "./PaginatorComponent";
import { Paginate } from "../util/paginate";



export class Paginator extends Component {

  state={
    movies: [],
    pageSize: 3,
    current : 1,
    currMovies : []

  };

  onDelete = (id) =>{
      this.setState({movies : this.state.movies.filter(movie=>(
        movie.id!=id
      ))
      }
      );
      
  }

  

  handleLike(movie){
    console.log("double click");
    var movies=[...this.state.movies];
    const index=movies.indexOf(movie);
    movies[index].liked = !movies[index].liked;
    this.setState(
      { movies : movies}
    );
    
  }

  constructor() {
    super();
    const allMovies=getMovies();
    this.state.movies=allMovies;
    this.state.current=1;
    this.state.currMovies = Paginate(allMovies,1,this.state.pageSize);
    this.onDelete.bind(this);
  }

  pageHandler = (page) =>{
    this.setState({current : page});
    console.log("page change",page);

  }
  
  

    render(){
      
      const totalItems = this.state.movies.length;
      const length = this.state.movies.length;
      const newMovies = Paginate(this.state.movies,this.state.current,this.state.pageSize)
      console.log(newMovies);

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
      newMovies.map(movie=>(
            <tr>
            <td scope="col">{movie.name}</td>
            <td scope="col">{movie.type}</td>
            <td scope="col">{movie.rating}</td>
            <td><button className="btn btn-danger" onClick={()=>{this.onDelete(movie.id)}}>Delete</button></td>
            <td><Like liked={movie.liked} onDobClick={()=>this.handleLike(movie)}/></td>
            </tr>   
      ))
    } 
      </tbody>
      </table>

      <PaginatorComponent totalItems={totalItems} pageSize={this.state.pageSize} onPageChange={this.pageHandler} currentPage={this.state.current}/>

        </div>
        </React.Fragment>
    );
    }
}

export default Paginator

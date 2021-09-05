import { getMovies } from "../services/Movies"
import React, { Component } from 'react'
import Like from "./Like";
import PaginatorComponent from "./PaginatorComponent";
import { Paginate } from "../util/paginate";
import _ from 'lodash';
import { Link } from "react-router-dom";


export class Paginator extends Component {

  state={
    movies: [],
    pageSize: 3,
    current : 1,
    sortColumn : {path : "name", order:"asc"}

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

  sortHandler = (column)=>{

    if(this.state.sortColumn.order==="asc" && this.state.sortColumn.path===column)
    this.setState({sortColumn : {path : column , order : "desc"}});
    else
    this.setState({sortColumn : {path : column , order : "asc"}});
  }

  SortIcon = (column)=>{

    if(this.state.sortColumn.path==column && this.state.sortColumn.order=="asc")
    return <i className="fa fa-sort-asc"></i>

    if(this.state.sortColumn.path==column && this.state.sortColumn.order=="desc")
    return <i className="fa fa-sort-desc"></i>

  }
  
  

    render(){
      
      const totalItems = this.state.movies.length;
      const length = this.state.movies.length;


      const sortedMovies = _.orderBy(this.state.movies,[this.state.sortColumn.path],[this.state.sortColumn.order])


      const newMovies = Paginate(sortedMovies,this.state.current,this.state.pageSize)
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
      <th scope="col" className ="clickable" onClick={()=>this.sortHandler("name") }>Name {this.SortIcon("name")}</th>
      <th scope="col" className ="clickable"  onClick={()=>this.sortHandler("type") }>Genre {this.SortIcon("type")}</th>
      <th scope="col" className ="clickable"  onClick={()=>this.sortHandler("rating")}>Rating {this.SortIcon("rating")}</th>
      <th scope="col"   >Delete</th>
      <th scope="col" >Like</th>
      
    </tr>
  </thead>
  <tbody>
    {
      newMovies.map(movie=>(
            <tr>
            <td scope="col">{<Link to={`/movieinfo/${movie.id}/${movie.name}`}>{movie.name}</Link>}</td>
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

import React, { Component } from 'react'

export class MovieInfo extends Component {
    render() {
        return (
            <div>
               <h1>Name : {this.props.match.params.name} </h1> 
               <h1>id : {this.props.match.params.id} </h1>
               <button className="btn btn-success btn-lg  mx-2" onClick={()=>{this.props.history.push('/movies')}}>Save</button>
               
            </div>
        )
    }
}

export default MovieInfo

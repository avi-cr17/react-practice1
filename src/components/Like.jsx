import React, { Component } from 'react'

export class Like extends Component {

    state={
        isLiked: false
    }

    onLike(){
        this.setState({isLiked: !this.state.isLiked});
    }

    

    

    render() {

        var classes="fa fa-heart"
        if(!this.state.isLiked)
        classes+="-o";

        return (
    

            <div>
               <i className={classes} aria-hidden="true" onDoubleClick={()=>{this.onLike()}}></i>
            </div>
        )
    }
}

export default Like

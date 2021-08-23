import React, { Component } from 'react'

export class Like extends Component {

    

    

    

    render() {

        var classes="fa fa-heart"
        if(!this.props.liked)
        classes+="-o";

        return (
    

            <div>
               <i className={classes} aria-hidden="true" onDoubleClick={this.props.onDobClick}></i>
            </div>
        )
    }
}

export default Like

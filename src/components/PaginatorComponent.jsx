import React, { Component } from 'react'
import _ from 'lodash'

export class PaginatorComponent extends Component {
  
    render() {

      var number = Math.ceil(this.props.totalItems/this.props.pageSize);
      const range = _.range(1,number+1);
      console.log(range);

      if(number ===1)
      return <div></div>;

        return (
            <div>
               <nav aria-label="...">
  <ul className="pagination">
    
  
  {
    range.map(val => (
      <li className="page-item"><a className="page-link" href="#" onClick={() => this.props.onPageChange(val) }>{val}</a></li>
    ))
  }
    
    
  </ul>
</nav> 
            </div>
        )
    }
}

export default PaginatorComponent
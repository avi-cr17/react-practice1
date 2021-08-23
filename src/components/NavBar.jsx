import React, { Component } from 'react'

export class NavBar extends Component {
    render() {
        return (
            <div>
                
                <nav className="navbar navbar-expand-md navbar-dark  bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Paginator</a>
   
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
                
            </div>
        )
    }
}

export default NavBar
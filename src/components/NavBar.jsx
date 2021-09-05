import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

export class NavBar extends Component {
    render() {
        return (
            <div>
                
                <nav className="navbar navbar-expand-md navbar-dark  bg-dark">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">React-Practice</NavLink>
   
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        
        <li className="nav-item">
          <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/movies" tabindex="-1" aria-disabled="flase">Movies</NavLink>
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

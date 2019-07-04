import React, { Component } from 'react';
import Category from './category/Index';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
export default class Header extends Component {
    render() {
        return (
            <div>
                <Router>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                        <Link className="nav-link" to='/'>Home</Link>
                        </li>
                        <li className="nav-item active">
                        <Link className="nav-link" to='/category'>Category</Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    </div>
                </nav>
                <div className='row'>
                    <div className='col-md-12'>
                        <Route exact path ='/category' component ={Category}/>
                    </div>
                </div>
                </Router>
            </div>
        );
    }
}

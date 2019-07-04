import React, { Component } from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
import Add from './Add';
import Listing from './Listing';
export default class Categori extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <hr/>
                        <Link className='btn btn-primary' to='/category'>List</Link>&nbsp;
                        <Link className='btn btn-primary' to='/category/add'>Add</Link>
                        <Route exact path ='/category' component ={Listing}/>
                        <Route exact path ='/category/add' component ={Add}/>
                    </div>
                </Router>
            </div>
        );
    }
}

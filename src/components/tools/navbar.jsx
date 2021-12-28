import React, { Component } from 'react';
import './../../css/tools/navbar.css'
class Navbar extends React.Component {
    render() { 
        return <nav className="navbar navbar-expand-lg navbar-light bg-yellow" >
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand txt-blue txt-bold" href="#" style={{marginLeft:30,fontWeight:800}}>MoviePedia</a>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link txt-blue txt-bold" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled txt-blue txt-bold" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <div className="input-group" >
                <input type="text" className="form-control"/>
                <span className="input-group-btn bg-blue">
                        <button className="btn" type="button"><span className="txt-yellow">Go!</span></button>
                </span>
            </div>
          </form>
        </div>
      </nav>;
    }
}
 
export default Navbar;
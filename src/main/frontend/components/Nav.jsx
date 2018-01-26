import React, { Component } from 'react';

import './Nav.less';

class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar">
                <a className='navbar-brand' href='/'>Mochinet2</a>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">

                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" />
                        <button className="btn btn-outline-primary" type="submit">Search</button>
                    </form>
                </div>

                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </nav>
        );
    }
}

export default Nav;

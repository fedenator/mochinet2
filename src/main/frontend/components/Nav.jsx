import React, { Component } from 'react';

import './Nav.less';

class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar">
                <a className='navbar-brand' href='/'>Mochinet2</a>
            </nav>
        );
    }
}

export default Nav;

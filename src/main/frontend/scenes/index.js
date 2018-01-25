import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Nav from '../components/Nav.jsx';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

class Index extends Component {
    render() {
        return(
            <div className="container-fluid">
                <Nav />
            </div>
        );
    }
}

ReactDOM.render( <Index/>, document.getElementById('app') );

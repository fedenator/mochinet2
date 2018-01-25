import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import Nav           from '../components/Nav.jsx';
import CommentsTable from '../components/CommentsTable.jsx';
import CommentEditor from '../components/CommentEditor.jsx';

import './index.less';

class Index extends Component {
    render() {
        return(
            <div className='container-fluid'>
                <Nav />
                <div className='row'>
                    <div className='col-3'><CommentEditor /></div>
                    <div className='col-9'><CommentsTable /></div>
                </div>
            </div>
        );
    }
}

ReactDOM.render( <Index />, document.getElementById('app') );

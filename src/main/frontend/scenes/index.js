import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import Nav           from '../components/Nav.jsx';
import CommentsTable from '../components/CommentsTable.jsx';
import CommentEditor from '../components/CommentEditor.jsx';

import './index.less';

class Index extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            id: ''
        }
    }
    
    setid(value) {
        this.setState({ id: value });
    }
    
    render() {
        return(
            <div className='vbox' id='Index'>
                <Nav />
                <div className='hbox'>
                    <div className='w-25'>
                        <CommentEditor
                            id    = { this.state.id }
                            setid = { this.setid    } />
                    </div>
                    <div className='w-75 scrolleable'><CommentsTable/></div>
                </div>
            </div>
        );
    }
}

ReactDOM.render( <Index />, document.getElementById('app') );

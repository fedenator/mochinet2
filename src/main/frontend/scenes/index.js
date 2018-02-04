import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import Nav             from '../components/Nav.jsx';
import CommentsTable   from '../components/CommentsTable.jsx';
import CommentEditor   from '../components/CommentEditor.jsx';
import { Item, Box, VBox, HBox }  from '../components/Boxes.jsx';

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
            <VBox>
                <Nav/>
                <HBox grow='1' h='1px' w='100%'>
                    <Item g='2' h='100%'>
                        <CommentEditor
                            id    = { this.state.id }
                            setid = { (val) => this.setid(val) } />
                    </Item>
                    <Item className='scrolleable' h='100%' g='5'><CommentsTable setid={ (val) => this.setid(val) }/></Item>
                </HBox>
            </VBox>
        );
    }
}

ReactDOM.render( <Index />, document.getElementById('app') );

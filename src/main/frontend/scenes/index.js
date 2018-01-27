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
                <HBox grow='1' h='1px'>
                    <Item w='2/7'>
                        <CommentEditor
                            id    = { this.state.id }
                            setid = { this.setid    } />
                    </Item>
                    <Item className='scrolleable' w='5/7'><CommentsTable setid={ this.setid }/></Item>
                </HBox>
            </VBox>
        );
    }
}

ReactDOM.render( <Index />, document.getElementById('app') );

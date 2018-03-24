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
            comment: {
                id          : 0,
                message     : '',
                creationDate: '',
                priority    : null
            }
        }
    }

    setComment(comment) {
        this.setState({ comment: comment });
    }

    render() {
        return(
            <VBox>
                <Nav/>
                <HBox grow='1' h='1px' w='100%'>
                    <Item g='2' h='100%'>
                        <CommentEditor
                            comment    = { this.state.comment }
                            setComment = { (comment) => this.setComment(comment) } />
                    </Item>
                    <Item className='scrolleable' h='100%' g='5'>
                        <CommentsTable setComment={ (comment) => this.setComment(comment) }/>
                    </Item>
                </HBox>
            </VBox>
        );
    }
}

ReactDOM.render( <Index />, document.getElementById('app') );

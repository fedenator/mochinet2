import React, { Component } from 'react';

import './CommentEditor.less';
import $ from 'jquery';
import { post } from '../net/fnet.js';

import Select from 'react-select';
import 'react-select/dist/react-select.css';

class CommentEditor extends Component {

    constructor (props) {
        super (props);

        this.state = {
            priorities   : []
        };

        $.get('/priorities', (data) => this.setState({ priorities: data }) );

    }

    clear() {
        this.props.setComment({
            id          : 0,
            message     : '',
            creationDate: '',
            priority    : null
        })
    }

    render () {
        let id = (this.props.comment.id != 0)? this.props.comment.id : '';
        return (
            <div className='CommentEditor border border-dark'>
                <button
                    type      = 'button'
                    className = 'btnNew btn btn-outline-dark rect'
                    onClick   = { (event) => this.clear() }>
                    Nuevo
                </button>
                <input
                    type = 'text'
                    id   = 'txtId'
                    className   = 'from-control border border-dark text-center no-cursor'
                    placeholder = '#Nuevo'
                    value       = { id }
                    readOnly
                />
                <textarea
                    className = 'txaBody border border-dark'
                    value     = { this.props.comment.message }
                    onChange  = { (event) => {
                        let comment = this.props.comment;
                        comment.message = event.target.value;

                        this.props.setComment(comment);
                    }}
                />
                {/*TAG: PrioritySelector */}
                <Select
                    className = 'selPriority border border-dark rect'
                    options   = {this.state.priorities}

                    value = {this.props.comment.priority}

                    style = {{ backgroundColor: (this.props.comment.priority != null)?
                        'rgb('+this.props.comment.priority.color.red+','+this.props.comment.priority.color.green+','+this.props.comment.priority.color.blue+')' : 'white' }}

                    onInputChange = {(inputValue) => {
                        this._inputValue = inputValue;
                    }}

                    onChange = { (item) => {
                        let comment = this.props.comment;
                        comment.priority = item;
                        this.props.setComment(comment);
                    }}

                    optionRenderer = { (item) => {
                        let bg = 'rgb('+item.color.red+','+item.color.green+','+item.color.blue+')';
                        return (
                            <div className='foption' style={{ backgroundColor: bg }}>
                                { item.name }
                            </div>
                        );
                    }}

                    valueRenderer = { (item) => <div>{ item.name }</div> }
                />
                <button
                    className = 'btnSave btn btn-outline-dark rect'

                    onClick = { (event) => {
                        if (this.props.comment.id != 0) {
                            post( '/comment/'+this.props.comment.id, this.props.comment, (data) => this.clear() );
                        } else {
                            post( '/add-comment', this.props.comment, (data) => this.clear() );
                        }
                    }}
                >
                    Guardar
                </button>
                <button
                    className = 'btnDelete btn btn-outline-dark rect'
                    onClick={ (event) => post( '/delete-comment/'+this.props.comment.id, null, this.clear() ) }
                >
                    Borrar
                </button>
            </div>
        );
    }
}

CommentEditor.defaultProps = {
    id: ''
};

export default CommentEditor;

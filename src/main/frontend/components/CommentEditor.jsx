import React, { Component } from 'react';

import './CommentEditor.less';

class PrioritySelector extends Component {

    constructor (props) {
        super (props);
        
        this.colors = [
            '#00FF00',
            '#FFFF00',
            '#FF8000',
            '#FF0000'
        ];
        
        this.state = {
            value: 0
        };
    }

    render () {
        return (
            <input
                type = 'number'
                className = 'selPriority form-control border border-dark text-center rect'
                
                min='0' max={this.props.max}
                
                value    = {this.state.value}
                style    = { {backgroundColor: this.colors[this.state.value]} }
                
                onChange = { (event) => 
                    this.setState ({
                        value: event.target.value
                    })
                }
            />
        );
    }
}

class CommentEditor extends Component {
    
    constructor (props) {
        super (props);
    }
    
    render () {
        
        return (
            <div className='CommentEditor border border-dark'>
                <button
                    type      = 'button'
                    className = 'btnNew btn btn-outline-dark rect'
                    onClick   = { (event) => this.props.setid('') }>
                    Nuevo
                </button>
                <input
                    type = 'text'
                    id   = 'txtId'
                    className   = 'from-control border border-dark text-center no-cursor'
                    placeholder = '#Nuevo'
                    value       = { this.props.id }
                    readOnly
                />
                <textarea className='txaBody     border border-dark'/>
                <PrioritySelector max='3' value='0'/>
                <button   className='btnSave     btn btn-outline-dark rect'>Guardar</button>
                <button   className='btnDelete   btn btn-outline-dark rect'>Borrar</button>
            </div>
        );
    }
}

CommentEditor.defaultProps = {
    id: ''
};

export default CommentEditor;

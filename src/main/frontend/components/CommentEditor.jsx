import React, { Component } from 'react';

import './CommentEditor.less';

class PrioritySelector extends Component {

    constructor(props) {
        super(props);
        
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

    render() {
        return (
            <input
                type='number'
                className='selPriority form-control border border-dark text-center rect'
                min='0' max={this.props.max}
                value    = {this.state.value}
                onChange = { (event) => 
                    this.setState ({
                        value:   event.target.value
                    })
                }
                style    = { {backgroundColor: this.colors[this.state.value]} }
            />
        );
    }
}

class CommentEditor extends Component {
    render() {
        return (
            <div className='CommentEditor border border-dark'>
                <button type="button" className='btnNew btn btn-outline-dark rect'>Nuevo</button>
                <input
                    type="text"
                    className='txtId from-control border border-dark text-center no-cursor'
                    placeholder='#Nuevo'
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

export default CommentEditor;

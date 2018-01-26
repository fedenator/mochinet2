import React, { Component } from 'react';

import './CommentEditor.less';

class PrioritySelector extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        };
    }

    render() {
        return (
            <input
                type='number'
                className='selPriority form-control border border-dark text-center'
                min='0' max={this.props.max}
                value={this.state.value}
                onChange={ (event) => this.setState({value: event.target.value})}
            />
        );
    }
}

class CommentEditor extends Component {
    render() {
        return (
            <div className='CommentEditor border border-dark'>
                <button type="button" className='btnNew btn btn-outline-dark'>Nuevo</button>
                <input
                    type="text"
                    className='txtId from-control border border-dark text-center no-cursor'
                    placeholder='#Nuevo'
                    readOnly
                />
                <textarea className='txaBody     border border-dark'/>
                <PrioritySelector max='5' value='0'/>
                <button   className='btnSave     btn btn-outline-dark'>Guardar</button>
                <button   className='btnDelete   btn btn-outline-dark'>Borrar</button>
            </div>
        );
    }
}

export default CommentEditor;

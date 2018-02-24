import React, { Component } from 'react';

import './CommentEditor.less';
import $ from 'jquery';

import Select from 'react-select';
import 'react-select/dist/react-select.css';

class CommentEditor extends Component {

    constructor (props) {
        super (props);

        this.state = {
            priorities: [],
            selectedValue: null
        };

        $.get('/priorities', (data) => {
            this.setState({
                priorities: data.map( (item) => {
                    return {label: item.name, value: item.id, bg: item.color};
                })
            });
        });
    }

    save() {
    }

    delete() {

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
                <textarea className='txaBody border border-dark'/>
                <Select
                    className='selPriority border border-dark rect'
                    options={this.state.priorities}

                    value={this.state.selectedValue}

                    style={{backgroundColor: this.state.bgColor}}

                    onInputChange={(inputValue) => {
                        this._inputValue = inputValue;
                    }}

                    onChange={ (item) => {

                        let bg = (item != null)?
                            'rgb('+item.bg.red+','+item.bg.green+','+item.bg.blue+')' : 'white';
                        this.setState({selectedValue: item, bgColor: bg});
                    }}

                    optionRenderer={ (item) => {
                        let bg = 'rgb('+item.bg.red+','+item.bg.green+','+item.bg.blue+')';
                        return (
                            <div className='foption' style={{ backgroundColor: bg }}>
                                { item.label }
                            </div>
                        );
                    }}

                    valueRenderer= { (item) => <div>{ item.label }</div> }
                />
                <button className='btnSave   btn btn-outline-dark rect' onClick={ this.save   }>Guardar</button>
                <button className='btnDelete btn btn-outline-dark rect' onClick={ this.delete }>Borrar</button>
            </div>
        );
    }
}

CommentEditor.defaultProps = {
    id: ''
};

export default CommentEditor;

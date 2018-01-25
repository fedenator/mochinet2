import React, { Component } from 'react';

import './CommentEditor.less';

class CommentEditor extends Component {
    render() {
        return (
            <form className='CommentEditor border border-dark'>
                <div className='row'>
                    <div className='column'>
                        <button type="button" className="btn btn-outline-dark">Nuevo</button>
                    </div>
                    <div className='column'>
                        <input
                            type="text"
                            className='from-control border rounded border-dark text-center'
                            placeholder='#Nuevo'
                        />
                    </div>
                </div>
            </form>
        );
    }
}

export default CommentEditor;
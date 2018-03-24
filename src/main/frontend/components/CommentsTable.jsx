import React, { Component } from 'react';
import $                    from 'jquery';

import './CommentsTable.less';

class CommentRow extends Component {
    render() {
        let color = 'rgb('+this.props.comment.priority.color.red+','+this.props.comment.priority.color.green+','+this.props.comment.priority.color.blue+')';
        return (
            <tr
                onClick = { (event) => this.props.setComment(this.props.comment) }
                style   = { {backgroundColor:     color} }>
              <td className='v-center h-center'>{ this.props.comment.id           }</td>
              <td className='v-center'>         { this.props.comment.message      }</td>
              <td className='v-center h-center'>{ this.props.comment.creationDate }</td>
            </tr>
        );
    }
}

class CommentsTable extends Component {

    constructor(props) {
        super(props);

        this.state = {
            comments: []
        }
    }

    updateTable() {
        $.get( "/comments", (data) => this.setState({ comments: data }) );
    }

    componentDidMount() {
        this.updateTable();
        this.timer = setInterval( () => this.updateTable() , 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        const generateTag = (id, setComment, comment) => {
            return <CommentRow key={id} setComment={setComment} comment={comment}/>
        }

        let tags  = [];
         for (let comment of this.state.comments) {

             tags.push( generateTag(comment.id, (comment) => this.props.setComment(comment), comment) );
         }

        return (
            <table className='CommentsTable table'>
                <thead>
                    <tr>
                        <th scope='col' className='h-center' style={{width: '60px'}}>#</th>
                        <th scope='col' style={{width: 'auto'}}>Mensaje</th>
                        <th scope='col' className='h-center' style={{width: '100px'}}>Fecha</th>
                    </tr>
                </thead>
                <tbody className='scrolleable'>
                    { tags }
                </tbody>
            </table>
        );
    }
}

export default CommentsTable;

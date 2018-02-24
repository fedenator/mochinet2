import React, { Component } from 'react';
import $                    from 'jquery';

import './CommentsTable.less';

class CommentRow extends Component {
    render() {
        return (
            <tr
                onClick = { (event) => this.props.setid(this.props.key) }
                style   = { {backgroundColor: this.props.color} }>
              <td className='v-center h-center'>{ this.props.id }</td>
              <td className='v-center'>         { this.props.message }</td>
              <td className='v-center h-center'>{ this.props.date }</td>
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
        const generateTag = (id, setid, color, message, date) => {
            return <CommentRow key={id} setid={setid} color={color} message={message} date={date}/>
        }

        let tags  = [];
        // for (let comment of this.state.comments) {
        //     let color = 'rgb('+comment.priority.red+','+comment.priority.green+','+comment.priority.blue+')';
        //     tags.push( generateTag(comment.id, this.props.setid, color, comment.message, comment.creationDate) );
        // }

        return (
            <table className='CommentsTable table'>
                <thead>
                    <tr>
                        <th scope='col' className='h-center' style={{width: '60px'}}>#</th>
                        <th scope='col' style={{width: 'auto'}}>Mensaje</th>
                        <th scope='col' className='h-center' style={{width: '100px'}}>Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    { tags }
                </tbody>
            </table>
        );
    }
}

export default CommentsTable;

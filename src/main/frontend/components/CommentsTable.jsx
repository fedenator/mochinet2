import React, { Component } from 'react';

import './CommentsTable.less';

class CommentRow extends Component {
    render() {
        return (
            <tr
                onClick = { (event) => this.props.setid(this.props.id) }
                style   = { {backgroundColor: this.props.color} }>
              <td className='v-center h-center'>{ this.props.id }</td>
              <td className='v-center'>{ this.props.message }</td>
              <td className='v-center h-center'>{ this.props.date    }</td>
            </tr>
        );
    }
}

class CommentsTable extends Component {
    render() {
        const generateTag = (id, setid, color, message, date) => <CommentRow id={id} setid={setid} color={color} message={message} date={date}/>

        let tags = [];
        for (let i = 0; i < 100; i++) tags.push( generateTag(i, this.props.setid, '#f5c6cb', 'Markasdasdasdasdassad asdasdasdasdasdasdasdasdasdasdas dasdasdasdasdasdasdasdasdasdasdasdasdasdasdasas ssssssssssssssssssssssssssssssssssssssssss sssssssssssssssssssssssssssssssssssssss ssaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaas', '1/1/2018') );

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

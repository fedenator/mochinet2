import React, { Component } from 'react';

import './CommentsTable.less';

class CommentRow extends Component {
    render() {
        return (
            <tr
                onClick = { (event) => this.props.setid(this.props.id) }
                style   = { {backgroundColor: this.props.color} }>
              <th scope="row">{ this.props.id }</th>
              <td>{ this.props.message }</td>
              <td>{ this.props.date    }</td>
            </tr>
        );
    }
}

class CommentsTable extends Component {
    render() {
        return (
            <table className='CommentsTable table'>
                <thead>
                    <tr>
                        <th scope='col' style={{width: '20%'}}>#</th>
                        <th scope='col' style={{width: '60%'}}>Mensaje</th>
                        <th scope='col' style={{width: '20%'}}>Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    <CommentRow id={0}  setid={this.props.id} color='#f5c6cb' message='Mark' date='1/1/2018'/>
                    <CommentRow id={1}  setid={this.props.id} color='#f5c6cb' message='Larry' date='1/1/2018'/>
                    <CommentRow id={2}  setid={this.props.id} color='#f5c6cb' message='Joe' date='1/1/2018'/>
                    <CommentRow id={3}  setid={this.props.id} color='#f5c6cb' message='Mark' date='1/1/2018'/>
                    <CommentRow id={4}  setid={this.props.id} color='#f5c6cb' message='Mark' date='1/1/2018'/>
                    <CommentRow id={5}  setid={this.props.id} color='#f5c6cb' message='Mark' date='1/1/2018'/>
                    <CommentRow id={6}  setid={this.props.id} color='#f5c6cb' message='Mark' date='1/1/2018'/>
                    <CommentRow id={7}  setid={this.props.id} color='#f5c6cb' message='Mark' date='1/1/2018'/>
                    <CommentRow id={8}  setid={this.props.id} color='#f5c6cb' message='Mark' date='1/1/2018'/>
                    <CommentRow id={9}  setid={this.props.id} color='#f5c6cb' message='Mark' date='1/1/2018'/>
                    <CommentRow id={10} setid={this.props.id} color='#f5c6cb' message='Mark' date='1/1/2018'/>
                    <CommentRow id={11} setid={this.props.id} color='#f5c6cb' message='Mark' date='1/1/2018'/>
                    <CommentRow id={12} setid={this.props.id} color='#f5c6cb' message='Mark' date='1/1/2018'/>
                    <CommentRow id={13} setid={this.props.id} color='#f5c6cb' message='Mark' date='1/1/2018'/>
                    <CommentRow id={14} setid={this.props.id} color='#f5c6cb' message='Mark' date='1/1/2018'/>
                    <CommentRow id={15} setid={this.props.id} color='#f5c6cb' message='Mark' date='1/1/2018'/>
                    <CommentRow id={16} setid={this.props.id} color='#f5c6cb' message='Mark' date='1/1/2018'/>
                    <CommentRow id={17} setid={this.props.id} color='#f5c6cb' message='Mark' date='1/1/2018'/>
                    <CommentRow id={18} setid={this.props.id} color='#f5c6cb' message='Mark' date='1/1/2018'/>
                    <CommentRow id={19} setid={this.props.id} color='#f5c6cb' message='Mark' date='1/1/2018'/>
                    <CommentRow id={20} setid={this.props.id} color='#f5c6cb' message='Mark' date='1/1/2018'/>
                    <CommentRow id={21} setid={this.props.id} color='#f5c6cb' message='Mark' date='1/1/2018'/>
                    <CommentRow id={22} setid={this.props.id} color='#f5c6cb' message='Mark' date='1/1/2018'/>
                    <CommentRow id={23} setid={this.props.id} color='#f5c6cb' message='Mark' date='1/1/2018'/>
                    <CommentRow id={24} setid={this.props.id} color='#f5c6cb' message='Mark' date='1/1/2018'/>
                </tbody>
            </table>
        );
    }
}

export default CommentsTable;

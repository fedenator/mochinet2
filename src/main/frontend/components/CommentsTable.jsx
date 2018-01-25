import React, { Component } from 'react';

import './CommentsTable.less';

class CommentsTable extends Component {
    render() {
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Mensaje</th>
                        <th scope="col">Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>1/1/2018</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>1/1/2018</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Larry</td>
                      <td>1/1/2018</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default CommentsTable;
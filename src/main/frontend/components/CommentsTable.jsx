import React, { Component } from 'react';

import './CommentsTable.less';

class CommentsTable extends Component {
    render() {
    return (
            <table className='CommentsTable table holi'>
                <thead>
                    <tr>
                        <th scope='col' style={{width: '20%'}}>#</th>
                        <th scope='col' style={{width: '60%'}}>Mensaje</th>
                        <th scope='col' style={{width: '20%'}}>Fecha</th>
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
                    <tr>
                      <th scope="row">4</th>
                      <td>Mark</td>
                      <td>1/1/2018</td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td>Jacob</td>
                      <td>1/1/2018</td>
                    </tr>
                    <tr>
                      <th scope="row">6</th>
                      <td>Larry</td>
                      <td>1/1/2018</td>
                    </tr>
                    <tr>
                      <th scope="row">7</th>
                      <td>Mark</td>
                      <td>1/1/2018</td>
                    </tr>
                    <tr>
                      <th scope="row">8</th>
                      <td>Jacob</td>
                      <td>1/1/2018</td>
                    </tr>
                    <tr>
                      <th scope="row">9</th>
                      <td>Larry</td>
                      <td>1/1/2018</td>
                    </tr>
                    <tr>
                      <th scope="row">10</th>
                      <td>Mark</td>
                      <td>1/1/2018</td>
                    </tr>
                    <tr>
                      <th scope="row">11</th>
                      <td>Jacob</td>
                      <td>1/1/2018</td>
                    </tr>
                    <tr>
                      <th scope="row">12</th>
                      <td>Larry</td>
                      <td>1/1/2018</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default CommentsTable;

import React, { Component } from 'react';

class Item extends Component {
    render() {
        let num, div;
        [num, div] = this.props.w.split('/');
        let w = num/div*100;
        [num, div] = this.props.h.split('/');
        let h = num/div*100;

        return (
            <div style={{ width: w+'%', height: h+'%' }} className={ this.props.className}>
                { this.props.children }
            </div>
        );
    }
}

Item.defaultProps = {
    h: '1/1',
    w: '1/1',
    className: null
}

class Box extends Component {
    constructor(props) {
        super(props);
        this.style = {};
    }

    render() {
        this.style['width']    = this.props.w;
        this.style['height']   = this.props.h;
        this.style['flexGrow'] = this.props.grow;
        this.style['backgroundColor'] = this.props.bgColor;

        return (
            <div className={ this.props.className } style={ this.style }>
                { this.props.children }
            </div>
        );
    }
}

class VBox extends Box {
    render() {
        this.style['display'] = 'flex';
        this.style['flexDirection'] = 'column'
        return super.render();
    }
}

class HBox extends Box {
    render() {
        this.style['display'] = 'flex';
        return super.render();
    }
}

const defaultProps = {
    w:  '100%',
    h: '100%',
    bgColor: '#FFFFFF',
    grow: 0,
    className: null
};

Box.defaultProps  = defaultProps;

export { Item, Box, VBox, HBox };

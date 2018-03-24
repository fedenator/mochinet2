import React, { Component } from 'react';

class Item extends Component {
    render() {
        return (
            <div
                style={{
                    width: this.props.w,
                    height: this.props.h,
                    flexGrow: this.props.g
                }}
                className={ this.props.className }>
                { this.props.children }
            </div>
        );
    }
}

Item.defaultProps = {
    h: '1px',
    w: '1px',
    g: '0',
    className: null
}

class Box extends Component {
    constructor(props) {
        super(props);
        this.style = {
            width:           this.props.w,
            height:          this.props.h,
            maxWidth:        this.props.maxW,
            maxHeight:       this.props.maxH,
            flexGrow:        this.props.grow,
            backgroundColor: this.props.bgColor
        };
    }

    render() {
        return (
            <div className={ this.props.className } style={ this.style }>
                { this.props.children }
            </div>
        );
    }
}

class VBox extends Box {
    constructor(props) {
        super(props);
        this.style['display'] = 'flex';
        this.style['flexDirection'] = 'column'
    }
}

class HBox extends Box {
    constructor(props) {
        super(props);
        this.style['display'] = 'flex';
    }
}

const defaultProps = {
    w: '100%',
    h: '100%',
    bgColor: '#FFFFFF',
    grow: 0,
    className: null
};

Box.defaultProps  = defaultProps;

export { Item, Box, VBox, HBox };

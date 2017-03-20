import React, { PropTypes } from 'react';

const SectionFieldset = React.createClass({

    displayName: 'SectionFieldset',

    render() {

        return (
            <div className={this.props.containerClass} style={this.props.style}>
                <div style={{ textAlign: this.props.titleAlign, fontVariant: 'small-caps' }}><h3>{this.props.title}</h3></div>
                <div>
                    {this.props.children}
                </div>
            </div>
        );

    },

    defaultProps: {
        style: { borderWidth: '1px', borderStyle: 'solid', borderColor: '#000000', color: '#DD0000' },
        title: 'Title',
        titleAlign: 'left'
    },

    propTypes: {
        children: PropTypes.node.isRequired,
        containerClass: PropTypes.string,
        style: PropTypes.object,
        title: PropTypes.string,
        titleAlign: PropTypes.string
    }

});

export default SectionFieldset;
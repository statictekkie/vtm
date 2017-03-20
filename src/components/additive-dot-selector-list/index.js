import React, { PropTypes } from 'react';

import DotSelectorList from '../dot-selector-list';
import DotListAddition from '../dot-list-addition';

class AdditiveDotSelectorList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={this.props.containerClass} style={this.props.style}>
                <DotSelectorList section={this.props.section} scope={this.props.scope} title={this.props.title} titleAlign={this.props.titleAlign} maxDotCount={this.props.maxDotCount} removeable={true}/>
                <DotListAddition section={this.props.section} scope={this.props.scope} textFieldStyle={this.props.textFieldStyle}/>
            </div>
        );
    }

}

AdditiveDotSelectorList.propTypes = {
    containerClass: PropTypes.string,
    maxDotCount: PropTypes.number,
    scope: PropTypes.string.isRequired,
    section: PropTypes.string.isRequired,
    style: PropTypes.object,
    textFieldStyle: PropTypes.object,
    title: PropTypes.string,
    titleAlign: PropTypes.string
};

export default AdditiveDotSelectorList;
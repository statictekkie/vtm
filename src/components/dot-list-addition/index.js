import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import IconButton from 'material-ui/IconButton';
import ContentAddCircle from 'material-ui/svg-icons/content/add-circle';
import TextField from 'material-ui/TextField';

import { addDotItem } from '../../actions';

const upperCaseFirst = (word) => (word.toLowerCase().replace(/\b[a-z]/g, function(letter) {
    return letter.toUpperCase();
}));

class DotListAddition extends React.Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.props.onSubmit.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.state = { value: '' };
    }

    handleTextChange(event) {
        this.setState({ value: event.target.value });
    }

    transformKey(key) {
        const matcher = /^(\S+)\s+(\S.*)$/;

        let oldKey = key;
        let match = matcher.exec(oldKey);
        let newKey = '';

        while (!!match && match.index > -1) {

            const word = match[1];

            if (newKey === '') {
                newKey += word.toLowerCase();
            }
            else {
                newKey += upperCaseFirst(word.toLowerCase());
            }

            oldKey = match[2];
            match = matcher.exec(oldKey);
        }

        if (newKey === '') {
            newKey += oldKey.toLowerCase();
        }
        else {
            newKey += upperCaseFirst(oldKey.toLowerCase());
        }

        return newKey;
    }

    render() {
        return (
            <div style={this.props.style}>
                <TextField id='textField' value={this.state.value} style={this.props.textFieldStyle} onChange={this.handleTextChange}/>
                <IconButton onClick={this.onSubmit}>
                    <ContentAddCircle hoverColor='Firebrick'/>
                </IconButton>
            </div>
        );
    }

}

DotListAddition.displayName = 'DotListAddition';

DotListAddition.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    scope: PropTypes.string.isRequired,
    section: PropTypes.string.isRequired,
    style: PropTypes.object,
    textFieldStyle: PropTypes.object
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        dispatch,
        onSubmit: function() {

            if (this.state.value === '') {
                return;
            }

            dispatch(addDotItem(props.section, props.scope, this.transformKey(this.state.value), 1));
            this.setState({ value: '' });
        }
    };
};

const DotListAdditionContainer = connect(null, mapDispatchToProps)(DotListAddition);

export default DotListAdditionContainer;
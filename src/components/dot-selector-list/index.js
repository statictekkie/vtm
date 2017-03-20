import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { List, Map } from 'immutable';

import { changeDotValue, removeDotItem } from '../../actions';

import DotSelector from '../../components/dot-selector';
import SectionFieldset from '../../containers/section-fieldset';

class DotSelectorList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const upperCaseFirst = (word) => (word.toLowerCase().replace(/\b[a-z]/g, function(letter) {
            return letter.toUpperCase();
        }));

        const sortKeys = (keys) => (
            !!this.props.keyOrder ? this.props.keyOrder : keys.sort()
        );

        const formatKey = (key) => {

            const matcher = /[a-z]([A-Z])/;

            let matchKey = key;
            let match = matcher.exec(matchKey);

            let formatted = '';

            while (!!match && match.index > -1) {

                const word = matchKey.substring(0, match.index + 1);
                formatted += upperCaseFirst(word);
                matchKey = matchKey.substring(match.index + 1);

                if (matchKey.length > 0) {
                    formatted += ' ';
                }

                match = matcher.exec(matchKey);
            }

            formatted += upperCaseFirst(matchKey);

            return formatted;
        };

        return (
            <SectionFieldset title={this.props.title} containerClass={this.props.containerClass} titleAlign={this.props.titleAlign} style={this.props.style}>
                {sortKeys(this.props.keys).map((key) => (
                    <DotSelector key={key} title={formatKey(key)} dotValue={this.props.values.get(key)} dotCount={this.props.maxDotCount}
                        onChange={(event) => { this.props.onChangeValue(key, event.target.value); }}
                        onRemove={() => { this.props.onRemove(key); }}
                        onClear={() => { this.props.onClear(key); }}
                        removeable={this.props.removeable}
                        clearable={this.props.clearable}
                        />
                ))}
            </SectionFieldset>
        );
    }

}

DotSelectorList.displayName = 'DotSelectorList';

DotSelectorList.propTypes = {
    clearable: PropTypes.bool,
    containerClass: PropTypes.string,
    keyOrder: PropTypes.object,
    keys: PropTypes.object,
    maxDotCount: PropTypes.number,
    onChangeValue: PropTypes.func.isRequired,
    onClear: PropTypes.func,
    onRemove: PropTypes.func,
    removeable: PropTypes.bool,
    style: PropTypes.object,
    title: PropTypes.string,
    titleAlign: PropTypes.string,
    values: PropTypes.object
};

DotSelectorList.defaultProps = {
    clearable: false,
    containerClass: 'c4',
    keys: List([]),
    maxDotCount: 5,
    removeable: false,
    style: { },
    values: Map({}),
    title: 'Title',
    titleAlign: 'center'
};

const mapStateToProps = (state, props) => {

    let values = Map({});

    const section = props.section;
    const scope = props.scope;

    const scopeExists = !!state.get(section) && !!state.get(section).get(scope);

    if (scopeExists) {
        state.get(section).get(scope).map((value, key) => {
            values = values.set(key, value);
        });
    }

    return {
        keys: scopeExists ? List(state.get(section).get(scope).keys()).sort() : List([]),
        values: values
    };

};

const mapDispatchToProps = (dispatch, props) => {
    return {
        dispatch,
        onChangeValue: function(key, value) {
            dispatch(changeDotValue(props.section, props.scope, key, value));
        },
        onRemove: function(key) {
            dispatch(removeDotItem(props.section, props.scope, key));
        },
        onClear: function(key) {
            dispatch(changeDotValue(props.section, props.scope, key, 0));
        }
    };
};

const DotSelectorListContainer = connect(mapStateToProps, mapDispatchToProps)(DotSelectorList);

export default DotSelectorListContainer;
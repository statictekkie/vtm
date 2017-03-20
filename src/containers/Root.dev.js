import 'babel-polyfill';
import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import DevTools from './DevTools';
import { connect } from 'react-redux';

import Divider from 'material-ui/Divider';

import { changeDotValue, removeDotItem } from '../../actions';

import AdditiveDotSelectorList from '../components/additive-dot-selector-list';
import PlayerDataContainer from '../components/player-data';
import Attributes from '../components/attributes';
import Abilities from '../components/abilities';
import Advantages from '../components/advantages';
import DotSelector from '../components/dot-selector';

import ToggleCheckbox from 'material-ui/svg-icons/toggle/check-box';
import ToggleCheckboxOutlineBlank from 'material-ui/svg-icons/toggle/check-box-outline-blank';


const Root = React.createClass({

    displayName: 'Root',

    // <div className='cell' style={{ textAlign: 'center' }}><img src='../images/vampire-logo.png'/></div>

    render() {

        const { store } = this.props;
        const baseStyle = { fontFamily: 'percolatorregular' };
        const dividerStyle = { margin: '12px 0 12px 0' };

        return (
            <MuiThemeProvider>
                <Provider store={store}>
                    <div style={{ margin: '0 auto', maxWidth: '980px' }}>
                        <PlayerDataContainer/>
                        <Divider style={dividerStyle}/>
                        <Attributes/>
                        <Divider style={dividerStyle}/>
                        <Abilities/>
                        <Divider style={dividerStyle}/>
                        <Advantages/>
                        <Divider style={dividerStyle}/>
                        <div className='grid gutters'>
                            <AdditiveDotSelectorList style={baseStyle} textFieldStyle={baseStyle} containerClass='cell' section='advantages' scope='otherTraits' title='Other Traits' titleAlign='center' maxDotCount={5}/>
                            <div className='cell'>
                                <div style={{ textAlign: 'center' }}><h3>Humanity / Path</h3></div>
                                <DotSelector dotValue={5} dotCount={10} dotJustification='center'
                                     dotJustification='center' section='traits' scope='humanityPath' key='humanity'
                                    onChange={(event) => { this.props.onChangeValue(key, event.target.value); }}/>

                                <div style={{ textAlign: 'center' }}><h3>Willpower</h3></div>
                                <DotSelector dotValue={5} dotCount={10} onChange={() => { }}
                                     />
                                <DotSelector dotValue={5} dotCount={10} onChange={() => { }} dotJustification='center' checkedIcon={<ToggleCheckbox/>} uncheckedIcon={<ToggleCheckboxOutlineBlank/>}/>

                            </div>
                            <div className='cell'/>
                        </div>

                    </div>
                </Provider>
            </MuiThemeProvider>
        );
    },

    propTypes: {
        store: PropTypes.object.isRequired
    }

});

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

export default Root;

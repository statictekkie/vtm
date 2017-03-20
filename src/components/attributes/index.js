import React from 'react';
import { List } from 'immutable';
import DotSelectorList from '../dot-selector-list';

class Attributes extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div style={{ textAlign: 'center' }}><h1>Attributes</h1></div>
                <div className='grid gutters'>
                    <DotSelectorList containerClass='cell' section='attributes' scope='physical' title='Physical'
                        keyOrder={List(['strength', 'dexterity', 'stamina'])}/>
                    <DotSelectorList containerClass='cell' section='attributes' scope='social' title='Social'
                        keyOrder={List(['charisma', 'manipulation', 'appearance'])}/>
                    <DotSelectorList containerClass='cell' section='attributes' scope='mental' title='Mental'
                        keyOrder={List(['perception', 'intelligence', 'wits'])}/>
                </div>
            </div>
        );
    }

}

export default Attributes;
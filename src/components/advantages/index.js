import React from 'react';
import DotSelectorList from '../dot-selector-list';
import AdditiveDotSelectorList from '../additive-dot-selector-list';

class Advantages extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const baseStyle = { fontFamily: 'percolatorregular' };

        return (
            <div>
                <div style={{ textAlign: 'center' }}><h1>Advantages</h1></div>
                <div className='grid gutters'>
                    <AdditiveDotSelectorList textFieldStyle={baseStyle} containerClass='cell' section='advantages' scope='disciplines' title='Disciplines'/>
                    <AdditiveDotSelectorList textFieldStyle={baseStyle} containerClass='cell' section='advantages' scope='backgrounds' title='Backgrounds'/>
                    <DotSelectorList containerClass='cell' section='advantages' scope='virtues' title='Virtues'/>
                </div>
            </div>
        );

    }

}

export default Advantages;
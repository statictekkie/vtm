import React from 'react';
import DotSelectorList from '../dot-selector-list';

class Abilities extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div style={{ textAlign: 'center' }}><h1>Abilities</h1></div>
                <div className='grid gutters'>
                    <DotSelectorList containerClass='cell' section='abilities' scope='talents' title='Talents' clearable={true}/>
                    <DotSelectorList containerClass='cell' section='abilities' scope='skills' title='Skills' clearable={true}/>
                    <DotSelectorList containerClass='cell' section='abilities' scope='knowledges' title='Knowledges' clearable={true}/>
                </div>
            </div>
        );
    }

}

export default Abilities;
import React, { PropTypes } from 'react';

import Checkbox from 'material-ui/Checkbox';
import Lens from 'material-ui/svg-icons/image/lens';
import ToggleRadioButtonUnchecked from 'material-ui/svg-icons/toggle/radio-button-unchecked';
import IconButton from 'material-ui/IconButton';
import ContentRemoveCircle from 'material-ui/svg-icons/content/remove-circle';
import Refresh from 'material-ui/svg-icons/navigation/refresh';

class DotSelector extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const dots = [];

        for (let i = 1; i <= this.props.dotCount; i++) {
            dots.push(<Checkbox key={i} value={i}
                iconStyle={{ width: 'auto', color: 'rgb(0, 0, 0)', fill: 'rgb(0, 0, 0)', stroke: 'rgb(0, 0, 0)' }}
                style={{ width: 'auto', margin: '0 4px', alignSelf: 'flex-end' }}
                labelStyle={{ display: 'none', visibility: 'hidden' }}
                checkedIcon={this.props.checkedIcon} uncheckedIcon={this.props.uncheckedIcon}
                checked={i <= this.props.dotValue}
                onCheck={this.props.onChange}/>);
        }

        return (
            <div className='grid center'>
                { !!this.props.title && this.props.title !== '' ? <span className='cell'>{this.props.title}</span> : '' }
                <div className='cell' style={{ flex: 1, display: 'flex', justifyContent: this.props.dotJustification, alignItems: 'center' }}>
                    {this.props.clearable ?
                        <IconButton style={{ margin: '0 0 0 4px', padding: 0, width: 'auto', height: 'auto' }} onClick={this.props.onClear}><Refresh color='Gray' hoverColor='Black'/></IconButton> :
                        ''
                    }
                    {dots}
                    {this.props.removeable ?
                        <IconButton style={{ margin: '0 0 0 4px', padding: 0, width: 'auto', height: 'auto' }} onClick={this.props.onRemove}><ContentRemoveCircle hoverColor='Firebrick'/></IconButton> :
                        ''
                    }
                </div>
            </div>
        );
    }

}

DotSelector.defaultProps = {
    checkedIcon: <Lens/>,
    clearable: false,
    dotCount: 5,
    dotJustification: 'flex-end',
    dotValue: 5,
    removeable: false,
    title: undefined,
    uncheckedIcon: <ToggleRadioButtonUnchecked/>
};

DotSelector.propTypes = {
    checkedIcon: PropTypes.node,
    clearable: PropTypes.bool,
    dotCount: PropTypes.number,
    dotJustification: PropTypes.string,
    dotValue: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    onClear: PropTypes.func,
    onRemove: PropTypes.func,
    removeable: PropTypes.bool,
    title: PropTypes.string,
    uncheckedIcon: PropTypes.node
};

export default DotSelector;
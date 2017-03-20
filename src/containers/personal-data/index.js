import React, { PropTypes } from 'react';

import SectionFieldset from '../section-fieldset';

import TextField from 'material-ui/TextField';

const PersonalData = React.createClass({

    displayName: 'PersonalData',

    render() {
        return (
            <SectionFieldset title='Personal Data' titleAlign='center' containerClass={this.props.containerClass + ' grid'} style={this.props.style}>
                <div className='grid gutters'>
                    <div className='cell'>
                        <TextField floatingLabelText='Name / Primary Alias' hintText='Name / Primary Alias' fullWidth={true}/>
                    </div>
                </div>
                <div className='grid gutters'>
                    <div className='cell'>
                        <TextField floatingLabelText='Metatype' hintText='Metatype' fullWidth={true}/>
                    </div>
                    <div className='cell'>
                        <TextField floatingLabelText='Ethnicity' hintText='Metatype' fullWidth={true}/>
                    </div>
                </div>
                <div className='grid gutters'>
                    <div className='cell'>
                        <TextField floatingLabelText='Age' hintText='Age' type='number' fullWidth={true}/>
                    </div>
                    <div className='cell'>
                        <TextField floatingLabelText='Sex' hintText='Sex' fullWidth={true}/>
                    </div>
                    <div className='cell'>
                        <TextField floatingLabelText='Height' hintText='Height' type='number' fullWidth={true}/>
                    </div>
                    <div className='cell'>
                        <TextField floatingLabelText='Weight' hintText='Weight' type='number' fullWidth={true}/>
                    </div>
                </div>
                <div className='grid gutters'>
                    <div className='cell'>
                        <TextField floatingLabelText='Street Cred' hintText='Street Cred' type='number' fullWidth={true}/>
                    </div>
                    <div className='cell'>
                        <TextField floatingLabelText='Notoriety' hintText='Notoriety' fullWidth={true}/>
                    </div>
                    <div className='cell'>
                        <TextField floatingLabelText='Public Awareness' hintText='Public Awareness' type='number' hintStyle={{ whiteSpace: 'nowrap' }} floatingLabelStyle={{ whiteSpace: 'nowrap' }} fullWidth={true}/>
                    </div>
                </div>
                <div className='grid gutters'>
                    <div className='cell'>
                        <TextField floatingLabelText='Karma' hintText='Karma' type='number' fullWidth={true}/>
                    </div>
                    <div className='cell'>
                        <TextField floatingLabelText='Total Karma' hintText='Total Karma' fullWidth={true}/>
                    </div>
                    <div className='cell'>
                        <TextField floatingLabelText='Misc' hintText='Misc' type='number' hintStyle={{ whiteSpace: 'nowrap' }} floatingLabelStyle={{ whiteSpace: 'nowrap' }} fullWidth={true}/>
                    </div>
                </div>
            </SectionFieldset>
        );
    },

    defaultProps: {
        style: { borderWidth: '1px', borderStyle: 'solid', borderColor: '#000000', color: '#DD0000' }
    },

    propTypes: {
        containerClass: PropTypes.string
    }

});

export default PersonalData;
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import TextField from 'material-ui/TextField';

import { changePlayerData } from '../../actions';

class PlayerData extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const textFieldStyle = { fontFamily: 'percolatorregular' };

        return (
            <div className='grid'>
                <div className='cell'>
                    <TextField id='name' hintText='Name' floatingLabelText='Name' style={textFieldStyle} value={this.props.characterName}
                        onChange={(event) => { this.props.onUpdate('name', event.target.value); }}/>
                    <TextField id='player' hintText='Player' floatingLabelText='Player' style={textFieldStyle} value={this.props.player}
                        onChange={(event) => { this.props.onUpdate('player', event.target.value); }}/>
                    <TextField id='chronicle' hintText='Chronicle' floatingLabelText='Chronicle' style={textFieldStyle} value={this.props.chronicle}
                        onChange={(event) => { this.props.onUpdate('chronicle', event.target.value); }}/>
                </div>
                <div className='cell'>
                    <TextField id='nature' hintText='Nature' floatingLabelText='Nature' style={textFieldStyle} value={this.props.nature}
                        onChange={(event) => { this.props.onUpdate('nature', event.target.value); }}/>
                    <TextField id='demeanor' hintText='Demeanor' floatingLabelText='Demeanor' style={textFieldStyle} value={this.props.demeanor}
                        onChange={(event) => { this.props.onUpdate('demeanor', event.target.value); }}/>
                    <TextField id='concept' hintText='Concept' floatingLabelText='Concept' style={textFieldStyle} value={this.props.concept}
                        onChange={(event) => { this.props.onUpdate('concept', event.target.value); }}/>
                </div>
                <div className='cell'>
                    <TextField id='clan' hintText='clan' floatingLabelText='Clan' style={textFieldStyle} value={this.props.clan}
                        onChange={(event) => { this.props.onUpdate('clan', event.target.value); }}/>
                    <TextField id='generation' hintText='Generation' floatingLabelText='Generation' style={textFieldStyle} value={this.props.generation}
                        onChange={(event) => { this.props.onUpdate('generation', event.target.value); }}/>
                    <TextField id='sire' hintText='Sire' floatingLabelText='Sire' style={textFieldStyle} value={this.props.sire}
                        onChange={(event) => { this.props.onUpdate('sire', event.target.value); }}/>
                </div>
            </div>
        );
    }

}

PlayerData.propTypes = {
    characterName: PropTypes.string.isRequired,
    chronicle: PropTypes.string.isRequired,
    clan: PropTypes.string.isRequired,
    concept: PropTypes.string.isRequired,
    demeanor: PropTypes.string.isRequired,
    generation: PropTypes.string.isRequired,
    nature: PropTypes.string.isRequired,
    onUpdate: PropTypes.func.isRequired,
    player: PropTypes.string.isRequired,
    sire: PropTypes.string.isRequired
};

PlayerData.defaultProps = {
    characterName: '',
    chronicle: '',
    clan: '',
    concept: '',
    demeanor: '',
    generation: '',
    nature: '',
    onUpdate: PropTypes.func.isRequired,
    player: '',
    sire: ''
};

const mapStateToProps = (state) => {
    return {
        characterName: state.get('playerData').get('name'),
        chronicle: state.get('playerData').get('chronicle'),
        clan: state.get('playerData').get('clan'),
        concept: state.get('playerData').get('concept'),
        demeanor: state.get('playerData').get('demeanor'),
        generation: state.get('playerData').get('generation'),
        nature: state.get('playerData').get('nature'),
        player: state.get('playerData').get('player'),
        sire: state.get('playerData').get('sire')
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        onUpdate: function(key, value) {
            dispatch(changePlayerData(key, value));
        }
    };
};

const PlayerDataContainer = connect(mapStateToProps, mapDispatchToProps)(PlayerData);

export default PlayerDataContainer;
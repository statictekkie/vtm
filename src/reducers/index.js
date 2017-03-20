import { Map } from 'immutable';
import { handleActions } from 'redux-actions';

export const initialState = Map({
    abilities: Map({
        knowledges: Map({
            academics: 0,
            computer: 0,
            finance: 0,
            investigation: 0,
            law: 0,
            linguistics: 0,
            medicine: 0,
            occult: 0,
            politics: 0,
            science: 0
        }),
        skills: Map({
            animalKen: 0,
            crafts: 0,
            drive: 0,
            etiquette: 0,
            firearms: 0,
            melee: 0,
            performance: 0,
            security: 0,
            stealth: 0,
            survival: 0
        }),
        talents: Map({
            alertness: 0,
            athletics: 0,
            brawl: 0,
            dodge: 0,
            empathy: 0,
            expression: 0,
            intimidation: 0,
            leadership: 0,
            streetwise: 0,
            subterfuge: 0
        })
    }),
    advantages: Map({
        backgrounds: Map({}),
        disciplines: Map({}),
        otherTraits: Map({}),
        virtues: Map({
            'conscience/conviction': 1,
            'self-control/instinct': 1,
            'courage': 1
        })
    }),
    attributes: Map({
        physical: Map({
            dexterity: 2,
            stamina: 3,
            strength: 1
        }),
        social: Map({
            appearance: 1,
            charisma: 1,
            manipulation: 1
        }),
        mental: Map({
            intelligence: 1,
            perception: 5,
            wits: 1
        })
    }),
    playerData: Map({
        characterName: '',
        player: '',
        chronicle: '',
        nature: '',
        demeanor: '',
        concept: '',
        clan: '',
        generation: '',
        sire: ''
    })
});

export default handleActions({
    CHANGE_DOT_VALUE: (state, action) => (state.setIn([action.payload.section, action.payload.scope, action.payload.item], parseInt(action.payload.value, 10))),
    ADD_DOT_ITEM: (state, action) => (state.setIn([action.payload.section, action.payload.scope, action.payload.item], parseInt(action.payload.value, 10))),
    REMOVE_DOT_ITEM: (state, action) => (state.deleteIn([action.payload.section, action.payload.scope, action.payload.item])),
    CHANGE_PLAYER_DATA: (state, action) => (state.setIn(['playerData', action.payload.key], action.payload.value))
}, initialState);

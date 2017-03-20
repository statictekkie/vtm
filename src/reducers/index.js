import { Map } from 'immutable';
//import { combineReducers } from 'react-redux';
import { handleActions } from 'redux-actions';

//export const shadowrunState = Map({
//    characterName: '',
//    player: '',
//    notes: '',
//    personalData: {
//        name: '',
//        primaryAlias: '',
//        metatype: '',
//        ethnicity: '',
//        age: 21,
//        sex: '',
//        height: 66,
//        weight: 150,
//        streetCred: 0,
//        notoriety: 0,
//        publicAwareness: 0,
//        currentKarma: 0,
//        totalKarma: 0,
//        misc: ''
//    }
//});

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

//export default handleActions({
//    CHANGE_CHARACTER_NAME: (state, action) => (state.set('characterName', action.payload)),
//    CHANGE_PLAYER_NAME: (state, action) => (state.set('playerName', action.payload).setIn(['personalData', 'name'], action.payload)),
//    CHANGE_PRIMARY_ALIAS: (state, action) => (state.setIn(['personalData', 'primaryAlias'], action.payload)),
//    CHANGE_METATYPE: (state, action) => (state.setIn(['personalData', 'metatype'], action.payload)),
//    CHANGE_ETHNICITY: (state, action) => (state.setIn(['personalData', 'ethnicity'], action.payload)),
//    CHANGE_AGE: (state, action) => (state.setIn(['personalData', 'age'], action.payload)),
//    CHANGE_SEX: (state, action) => (state.setIn(['personalData', 'sex'], action.payload)),
//    CHANGE_HEIGHT: (state, action) => (state.setIn(['personalData', 'height'], action.payload)),
//    CHANGE_WEIGHT: (state, action) => (state.setIn(['personalData', 'weight'], action.payload)),
//    CHANGE_STREET_CRED: (state, action) => (state.setIn(['personalData', 'streetCred'], action.payload)),
//    CHANGE_NOTORIETY: (state, action) => (state.setIn(['personalData', 'notoriety'], action.payload)),
//    CHANGE_PUBLIC_AWARENESS: (state, action) => (state.setIn(['personalData', 'publicAwareness'], action.payload)),
//    CHANGE_KARMA: (state, action) => (state.setIn(['personalData', 'karma'], action.payload)),
//    CHANGE_TOTAL_KARMA: (state, action) => (state.setIn(['personalData', 'totalKarma'], action.payload)),
//    CHANGE_MISC: (state, action) => (state.setIn(['personalData', 'misc'], action.payload))
//}, initialState);

export default handleActions({
    CHANGE_DOT_VALUE: (state, action) => (state.setIn([action.payload.section, action.payload.scope, action.payload.item], parseInt(action.payload.value, 10))),
    ADD_DOT_ITEM: (state, action) => (state.setIn([action.payload.section, action.payload.scope, action.payload.item], parseInt(action.payload.value, 10))),
    REMOVE_DOT_ITEM: (state, action) => (state.deleteIn([action.payload.section, action.payload.scope, action.payload.item])),
    CHANGE_PLAYER_DATA: (state, action) => (state.setIn(['playerData', action.payload.key], action.payload.value))
}, initialState);
import { createActions } from 'redux-actions';

export const {
    changeDotValue,
    addDotItem,
    removeDotItem,
    changePlayerData
} = createActions(
    {
        CHANGE_DOT_VALUE: (section, scope, item, value) => ({ section, scope, item, value }),
        ADD_DOT_ITEM: (section, scope, item, value) => ({ section, scope, item, value }),
        REMOVE_DOT_ITEM: (section, scope, item) => ({ section, scope, item }),
        CHANGE_PLAYER_DATA: (key, value) => ({ key, value })
    }
);

//export const {
//        changeCharacterName,
//        changePlayerName,
//        changePrimaryAlias,
//        changeMetatype,
//        changeEthnicity,
//        changeAge,
//        changeSex,
//        changeHeight,
//        changeWeight,
//        changeStreetCred,
//        changeNotoriety,
//        changePublicAwareness,
//        changeKarma,
//        changeTotalKarma,
//        changeMisc
//    } = createActions({},
//    'CHANGE_CHARACTER_NAME',
//    'CHANGE_PLAYER_NAME',
//    'CHANGE_PRIMARY_ALIAS',
//    'CHANGE_METATYPE',
//    'CHANGE_ETHNICITY',
//    'CHANGE_AGE',
//    'CHANGE_SEX',
//    'CHANGE_HEIGHT',
//    'CHANGE_WEIGHT',
//    'CHANGE_STREET_CRED',
//    'CHANGE_NOTORIETY',
//    'CHANGE_PUBLIC_AWARENESS',
//    'CHANGE_KARMA',
//    'CHANGE_TOTAL_KARMA',
//    'CHANGE_MISC'
//);

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
